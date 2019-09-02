using System.Collections.Generic;

namespace RockstarResume.Model
{
    public class Resume : BaseEntity
    {
        public Language Language { get; set; }
        public ICollection<ResumeProperty> ResumeProperties { get; set; }

        public Resume()
        {
            ResumeProperties = new HashSet<ResumeProperty>();
        }
    }
}
