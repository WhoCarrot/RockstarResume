using System.Collections.Generic;

namespace RockstarResume.Model
{
    public class AccountManager : User
    {
        public ICollection<Rockstar> Rockstars { get; set; }

        public AccountManager()
        {
            Rockstars = new HashSet<Rockstar>();
        }
    }
}
