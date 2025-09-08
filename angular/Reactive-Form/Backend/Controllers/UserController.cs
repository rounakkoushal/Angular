using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularAdvanceAPI.Data;

namespace AngularAdvanceAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet("{userId}/progress")]
        public async Task<IActionResult> GetUserProgress(int userId)
        {
            var progress = await _context.UserProgresses
                .Include(p => p.Topic)
                .Where(p => p.UserId == userId)
                .Select(p => new
                {
                    topicId = p.TopicId,
                    topicName = p.Topic.Name,
                    topicSlug = p.Topic.Slug,
                    isCompleted = p.IsCompleted,
                    bestScore = p.BestScore,
                    bestScorePercentage = p.BestScorePercentage,
                    totalAttempts = p.TotalAttempts,
                    completedAt = p.CompletedAt
                })
                .ToListAsync();

            var quizHistory = await _context.QuizAttempts
                .Include(q => q.Topic)
                .Where(q => q.UserId == userId && q.CompletedAt != null)
                .OrderByDescending(q => q.CompletedAt)
                .Take(10)
                .Select(q => new
                {
                    id = q.Id,
                    quizType = q.QuizType,
                    topicName = q.Topic != null ? q.Topic.Name : "Advanced Quiz",
                    score = q.CorrectAnswers,
                    total = q.TotalQuestions,
                    percentage = q.ScorePercentage,
                    completedAt = q.CompletedAt,
                    duration = q.Duration
                })
                .ToListAsync();

            return Ok(new
            {
                progress = progress,
                recentQuizzes = quizHistory,
                totalCompleted = progress.Count(p => p.isCompleted),
                averageScore = progress.Any() ? progress.Average(p => p.bestScorePercentage) : 0
            });
        }

        [HttpGet("all")]
        public async Task<IActionResult> GetAllUsers()
        {
            var users = await _context.Users
                .Where(u => u.Role == "User" && u.IsActive)
                .Select(u => new
                {
                    id = u.Id,
                    name = u.Name,
                    email = u.Email,
                    createdAt = u.CreatedAt,
                    lastLoginAt = u.LastLoginAt,
                    completedTopics = u.UserProgresses.Count(p => p.IsCompleted),
                    totalAttempts = u.QuizAttempts.Count(q => q.CompletedAt != null),
                    averageScore = u.UserProgresses.Any() ? u.UserProgresses.Average(p => p.BestScorePercentage) : 0
                })
                .ToListAsync();

            return Ok(users);
        }

        [HttpPost("{userId}/reset-progress")]
        public async Task<IActionResult> ResetUserProgress(int userId)
        {
            var progress = await _context.UserProgresses.Where(p => p.UserId == userId).ToListAsync();
            var attempts = await _context.QuizAttempts.Where(q => q.UserId == userId).ToListAsync();

            _context.UserProgresses.RemoveRange(progress);
            _context.QuizAttempts.RemoveRange(attempts);
            
            await _context.SaveChangesAsync();

            return Ok(new { message = "User progress reset successfully" });
        }
    }
}