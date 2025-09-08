using Microsoft.EntityFrameworkCore;
using AngularAdvanceAPI.Models;

namespace AngularAdvanceAPI.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Topic> Topics { get; set; }
        public DbSet<Question> Questions { get; set; }
        public DbSet<QuizAttempt> QuizAttempts { get; set; }
        public DbSet<QuizAnswer> QuizAnswers { get; set; }
        public DbSet<UserProgress> UserProgresses { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // User Configuration
            modelBuilder.Entity<User>(entity =>
            {
                entity.HasIndex(e => e.Email).IsUnique();
                entity.Property(e => e.Role).HasDefaultValue("User");
            });

            // Topic Configuration
            modelBuilder.Entity<Topic>(entity =>
            {
                entity.HasIndex(e => e.Slug).IsUnique();
            });

            // Question Configuration
            modelBuilder.Entity<Question>(entity =>
            {
                entity.HasOne(d => d.Topic)
                    .WithMany(p => p.Questions)
                    .HasForeignKey(d => d.TopicId)
                    .OnDelete(DeleteBehavior.Cascade);
            });

            // QuizAttempt Configuration
            modelBuilder.Entity<QuizAttempt>(entity =>
            {
                entity.HasOne(d => d.User)
                    .WithMany(p => p.QuizAttempts)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.HasOne(d => d.Topic)
                    .WithMany()
                    .HasForeignKey(d => d.TopicId)
                    .OnDelete(DeleteBehavior.SetNull);
            });

            // QuizAnswer Configuration
            modelBuilder.Entity<QuizAnswer>(entity =>
            {
                entity.HasOne(d => d.QuizAttempt)
                    .WithMany(p => p.QuizAnswers)
                    .HasForeignKey(d => d.QuizAttemptId)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.HasOne(d => d.Question)
                    .WithMany(p => p.QuizAnswers)
                    .HasForeignKey(d => d.QuestionId)
                    .OnDelete(DeleteBehavior.Cascade);
            });

            // UserProgress Configuration
            modelBuilder.Entity<UserProgress>(entity =>
            {
                entity.HasIndex(e => new { e.UserId, e.TopicId }).IsUnique();

                entity.HasOne(d => d.User)
                    .WithMany(p => p.UserProgresses)
                    .HasForeignKey(d => d.UserId)
                    .OnDelete(DeleteBehavior.Cascade);

                entity.HasOne(d => d.Topic)
                    .WithMany(p => p.UserProgresses)
                    .HasForeignKey(d => d.TopicId)
                    .OnDelete(DeleteBehavior.Cascade);
            });
        }
    }
}