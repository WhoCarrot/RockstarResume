using System.Collections.Generic;

namespace RockstarResume.Model
{
    public class Resume : BaseEntity
    {
        /// <summary>
        /// Two-lettered language code according to ISO 639-2 standard (https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes)
        /// </summary>
        public string Language { get; set; }

        public ICollection<ResumeProperty> ResumeProperties { get; set; }

        public Resume()
        {
            ResumeProperties = new HashSet<ResumeProperty>();
        }
    }
}
