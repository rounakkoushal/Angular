using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularAdvanceAPI.Models
{
    public class QuizAnswer
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public int QuizAttemptId { get; set; }
        
        [Required]
        public int QuestionId { get; set; }
        
        public int? UserAnswer { get; set; } // Index of selected option, null if not answered
        
        public bool IsCorrect { get; set; }
        public DateTime AnsweredAt { get; set; } = DateTime.UtcNow;
        
        [ForeignKey("QuizAttemptId")]
        public virtual QuizAttempt QuizAttempt { get; set; }
        
        [ForeignKey("QuestionId")]
        public virtual Question Question { get; set; }
    }
}