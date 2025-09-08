using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularAdvanceAPI.Models
{
    public class UserProgress
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        public int UserId { get; set; }
        
        [Required]
        public int TopicId { get; set; }
        
        public bool IsCompleted { get; set; } = false;
        public int BestScore { get; set; } = 0;
        public decimal BestScorePercentage { get; set; } = 0;
        public int TotalAttempts { get; set; } = 0;
        
        public DateTime FirstAttemptAt { get; set; } = DateTime.UtcNow;
        public DateTime? LastAttemptAt { get; set; }
        public DateTime? CompletedAt { get; set; }
        
        [ForeignKey("UserId")]
        public virtual User User { get; set; }
        
        [ForeignKey("TopicId")]
        public virtual Topic Topic { get; set; }
    }
}