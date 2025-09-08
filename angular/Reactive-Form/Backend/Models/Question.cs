using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace AngularAdvanceAPI.Models
{
    public class Question
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(1000)]
        public string QuestionText { get; set; }
        
        [Required]
        public string Options { get; set; } // JSON array of options
        
        [Required]
        public int CorrectAnswer { get; set; } // Index of correct option
        
        [StringLength(500)]
        public string Explanation { get; set; }
        
        [Required]
        public int TopicId { get; set; }
        
        [StringLength(50)]
        public string Difficulty { get; set; } = "Medium"; // Easy, Medium, Hard
        
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        [ForeignKey("TopicId")]
        public virtual Topic Topic { get; set; }
        
        public virtual ICollection<QuizAnswer> QuizAnswers { get; set; } = new List<QuizAnswer>();
    }
}