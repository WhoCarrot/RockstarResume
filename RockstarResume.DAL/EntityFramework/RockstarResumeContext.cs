using Microsoft.EntityFrameworkCore;
using RockstarResume.Model;

namespace RockstarResume.DAL
{
    public class RockstarResumeContext : DbContext
    {
        public DbSet<Rockstar> Rockstars { get; set; }
        public DbSet<AccountManager> AccountManagers { get; set; }
        public DbSet<Resume> Resumes { get; set; }
        //public DbSet<ResumeProperty> ResumeProperties { get; set; }
        //public DbSet<RockstarProperty> RockstarProperties { get; set; }
        //public DbSet<Certificate> Certificates { get; set; }
        //public DbSet<Competence> Competences { get; set; }
        //public DbSet<Education> Educations { get; set; }
        //public DbSet<Project> Projects { get; set; }

        public RockstarResumeContext(DbContextOptions<RockstarResumeContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

        }
    }
}
