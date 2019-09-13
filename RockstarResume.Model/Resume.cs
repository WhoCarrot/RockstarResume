using RockstarResume.Model.Types;

namespace RockstarResume.Model
{
    public class Resume : BaseEntity
    {
        public AccountManager AccountManager { get; set; }
        public Rockstar Rockstar { get; set; }
        public Language Language { get; set; }
        //public ICollection<RockstarProperty> Properties { get; set; }

        public Resume()
        {
            //Properties = new HashSet<RockstarProperty>();
        }
    }
}
