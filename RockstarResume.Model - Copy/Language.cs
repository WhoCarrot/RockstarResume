using RockstarResume.Model.Enums;

namespace RockstarResume.Model
{
    public class Language : BaseEntity
    {
        public string LanguageName { get; set; }
        public Proficiency Proficiency { get; set; }

    }
}
