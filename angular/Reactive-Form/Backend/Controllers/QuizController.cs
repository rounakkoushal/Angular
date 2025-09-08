using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularAdvanceAPI.Data;
using AngularAdvanceAPI.Models;
using System.Text.Json;

namespace AngularAdvanceAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class QuizController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public QuizController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("questions")]
        public async Task<IActionResult> GetQuestions([FromQuery] int? topicId, [FromQuery] int count = 50)
        {
            var query = _context.Questions.Where(q => q.IsActive);
            
            if (topicId.HasValue)
            {
                query = query.Where(q => q.TopicId == topicId.Value);
            }

            var questions = await query
                .OrderBy(x => Guid.NewGuid())
                .Take(count)
                .Select(q => new
                {
                    id = q.Id,
                    question = q.QuestionText,
                    options = JsonSerializer.Deserialize<string[]>(q.Options),
                    correct = q.CorrectAnswer,
                    explanation = q.Explanation,
                    topicId = q.TopicId
                })
                .ToListAsync();

            return Ok(questions);
        }

        [HttpPost("submit")]
        public async Task<IActionResult> SubmitQuiz([FromBody] QuizSubmissionRequest request)
        {
            var quizAttempt = new QuizAttempt
            {
                UserId = request.UserId,
                TopicId = request.TopicId,
                QuizType = request.QuizType,
                TotalQuestions = request.Answers.Count,
                StartedAt = request.StartedAt,
                CompletedAt = DateTime.UtcNow
            };

            _context.QuizAttempts.Add(quizAttempt);
            await _context.SaveChangesAsync();

            int correctAnswers = 0;
            foreach (var answer in request.Answers)
            {
                var question = await _context.Questions.FindAsync(answer.QuestionId);
                bool isCorrect = answer.UserAnswer == question?.CorrectAnswer;
                
                if (isCorrect) correctAnswers++;

                var quizAnswer = new QuizAnswer
                {
                    QuizAttemptId = quizAttempt.Id,
                    QuestionId = answer.QuestionId,
                    UserAnswer = answer.UserAnswer,
                    IsCorrect = isCorrect
                };

                _context.QuizAnswers.Add(quizAnswer);
            }

            quizAttempt.CorrectAnswers = correctAnswers;
            quizAttempt.ScorePercentage = (decimal)correctAnswers / request.Answers.Count * 100;
            quizAttempt.Duration = quizAttempt.CompletedAt - quizAttempt.StartedAt;

            await _context.SaveChangesAsync();

            // Update user progress if topic-specific quiz
            if (request.TopicId.HasValue)
            {
                await UpdateUserProgress(request.UserId, request.TopicId.Value, correctAnswers, quizAttempt.ScorePercentage);
            }

            return Ok(new
            {
                score = correctAnswers,
                total = request.Answers.Count,
                percentage = quizAttempt.ScorePercentage,
                attemptId = quizAttempt.Id
            });
        }

        private async Task UpdateUserProgress(int userId, int topicId, int score, decimal percentage)
        {
            var progress = await _context.UserProgresses
                .FirstOrDefaultAsync(p => p.UserId == userId && p.TopicId == topicId);

            if (progress == null)
            {
                progress = new UserProgress
                {
                    UserId = userId,
                    TopicId = topicId,
                    BestScore = score,
                    BestScorePercentage = percentage,
                    TotalAttempts = 1
                };
                _context.UserProgresses.Add(progress);
            }
            else
            {
                progress.TotalAttempts++;
                progress.LastAttemptAt = DateTime.UtcNow;
                
                if (percentage > progress.BestScorePercentage)
                {
                    progress.BestScore = score;
                    progress.BestScorePercentage = percentage;
                }
            }

            if (percentage >= 80 && !progress.IsCompleted)
            {
                progress.IsCompleted = true;
                progress.CompletedAt = DateTime.UtcNow;
            }

            await _context.SaveChangesAsync();
        }
    }

    public class QuizSubmissionRequest
    {
        public int UserId { get; set; }
        public int? TopicId { get; set; }
        public string QuizType { get; set; }
        public DateTime StartedAt { get; set; }
        public List<AnswerRequest> Answers { get; set; }
    }

    public class AnswerRequest
    {
        public int QuestionId { get; set; }
        public int? UserAnswer { get; set; }
    }
}