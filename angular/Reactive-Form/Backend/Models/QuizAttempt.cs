using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularAdvanceAPI.Models
{
    public class QuizAttempt
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public int UserId { get; set; }
        
        public int? TopicId { get; set; } // Null for mixed/advance quiz
        
        [Required]
        [StringLength(50)]
        public string QuizType { get; set; } // Topic, Advance, Mixed
        
        public int TotalQuestions { get; set; }
        public int CorrectAnswers { get; set; }
        public decimal ScorePercentage { get; set; }
        
        public DateTime StartedAt { get; set; } = DateTime.UtcNow;
        public DateTime? CompletedAt { get; set; }
        public TimeSpan? Duration { get; set; }
        
        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        
        [ForeignKey("TopicId")]
        public virtual Topic Topic { get; set; }
        
        public virtual ICollection<QuizAnswer> QuizAnswers { get; set; } = new List<QuizAnswer>();
    }
}