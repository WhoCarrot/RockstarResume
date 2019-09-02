using System.Collections.Generic;
using RockstarResume.Model.Enums;

namespace RockstarResume.Model
{
    public class Rockstar : User
    {
        public string Region { get; set; }
        public string Nationality { get; set; }

        public ICollection<Language> Languages { get; set; }
        public ICollection<DriversLicense> DriversLicenses { get; set; }
        public ICollection<AccountManager> AccountManagers { get; set; }

        public Rockstar()
        {
            AccountManagers = new HashSet<AccountManager>();
        }
    }
}
