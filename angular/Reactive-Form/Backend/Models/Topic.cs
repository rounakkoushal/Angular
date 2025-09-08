using System.ComponentModel.DataAnnotations;

namespace AngularAdvanceAPI.Models
{
    public class Topic
    {
        [Key]
        public int Id { get; set; }
        
        [Required]
        [StringLength(100)]
        public string Name { get; set; }
        
        [StringLength(500)]
        public string Description { get; set; }
        
        [Required]
        [StringLength(50)]
        public string Category { get; set; } // RxJS, NgRx, Forms, Testing, SSR
        
        [StringLength(100)]
        public string Slug { get; set; }
        
        public bool IsActive { get; set; } = true;
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
        
        public virtual ICollection<Question> Questions { get; set; } = new List<Question>();
        public virtual ICollection<UserProgress> UserProgresses { get; set; } = new List<UserProgress>();
    }
}