using System;
using RockstarResume.Model.Types;

namespace RockstarResume.Model.DTOs
{
    public class RockstarDTO
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PictureUrl { get; set; }
        public string Nationality { get; set; }
        public string Region { get; set; }
        public DateTime Birthday { get; set; }

        public RockstarDTO(Rockstar rockstar)
        {
            FirstName = rockstar.FirstName;
            LastName = rockstar.LastName;
            PictureUrl = rockstar.PictureUrl;
            Nationality = rockstar.Nationality;
            Region = rockstar.Region.ToString();
            Birthday = rockstar.Birthday;
        }
    }
}
