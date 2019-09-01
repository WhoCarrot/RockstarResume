using System;
using RockstarResume.Model.Types;

namespace RockstarResume.Model
{
    public abstract class Person : BaseEntity
    {
        public string FirstName { get; set; }
        public string Surname { get; set; }
        public DateTime Birthay { get; set; }
        public Region Region { get; set; }
        public string EmailAddress { get; set; }
        public string PhoneNumber { get; set; }
    }
}
