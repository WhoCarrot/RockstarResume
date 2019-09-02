using System.Collections.Generic;

namespace RockstarResume.Model.RockstarProperties
{
    public class RockstarProperty : BaseEntity
    {
        public Rockstar Rockstar { get; set; }
        public ICollection<Resume> Resumes { get; set; }

        protected RockstarProperty()
        {
            Resumes = new HashSet<Resume>();
        }
    }
}
