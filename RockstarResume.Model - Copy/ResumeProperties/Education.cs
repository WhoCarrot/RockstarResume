using System;

namespace RockstarResume.Model.ResumeProperties
{
    public class Education : ResumeProperty
    {
        public string Name { get; set; }
        public string Institution { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public bool Graduated { get; set; }
    }
}
