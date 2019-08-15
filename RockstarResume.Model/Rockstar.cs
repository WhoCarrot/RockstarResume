using RockstarResume.Model.RockstarProperties;
using System.Collections.Generic;

namespace RockstarResume.Model
{
    public class Rockstar : Person
    {
        public IEnumerable<RockstarProperty> Properties { get; set; }
        public string PictureUrl { get; set; }
        public string Nationality { get; set; }
        public bool DriversLicense { get; set; }
    }
}
