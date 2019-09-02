using System;
using RockstarResume.Model.RockstarProperties;
using System.Collections.Generic;
using RockstarResume.Model.Types;

namespace RockstarResume.Model
{
    public class Rockstar : Person
    {
        public ICollection<RockstarProperty> Properties { get; set; }
        public string PictureUrl { get; set; }
        public string Nationality { get; set; }
        public bool DriversLicense { get; set; }
        public DateTime Birthday { get; set; }
        public Region Region { get; set; }

        public Rockstar()
        {
            Properties = new HashSet<RockstarProperty>();
        }
    }
}
