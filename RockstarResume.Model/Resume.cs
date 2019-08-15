using RockstarResume.Model.Types;

namespace RockstarResume.Model
{
    public class Resume : BaseEntity
    {
        public AccountManager AccountManager { get; set; }
        public Rockstar Rockstar { get; set; }
        public Language Language { get; set; }
        //public IEnumerable<ResumeProperty> ResumeProperties { get; set; }
    }
}
