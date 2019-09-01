using System.Collections.Generic;

namespace RockstarResume.Model
{
    public class Rockstar : User
    {
        public ICollection<AccountManager> AccountManagers { get; set; }

        public Rockstar()
        {
            AccountManagers = new HashSet<AccountManager>();
        }
    }
}
