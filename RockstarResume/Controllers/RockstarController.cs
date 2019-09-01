using System.Linq;
using Microsoft.AspNetCore.Mvc;
using RockstarResume.Model;
using RockstarResume.Services;

namespace RockstarResume.App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RockstarController : ControllerBase
    {

        private readonly RockstarService _rockstarService;

        public RockstarController(RockstarService rockstarService)
        {
            _rockstarService = rockstarService;
        }

        public IActionResult Get()
        {
            var rockstars = _rockstarService.Get();
            var rockstarDTOs = rockstars.Select(rockstar => new RockstarDTO(rockstar));
            return Ok(rockstarDTOs);
        }

        public IActionResult Get(int id)
        {
            var rockstar = _rockstarService.Get(id);
            var rockstarDTO = new RockstarDTO(rockstar);
            return Ok(rockstarDTO);
        }

        public IActionResult Post(Rockstar rockstar)
        {
            var createdRockstar = _rockstarService.Create(rockstar);
            if (createdRockstar == null) return BadRequest();
            var createdRockstarDTO = new RockstarDTO(createdRockstar);
            return Ok(createdRockstarDTO);
        }

        public IActionResult Put(Rockstar rockstar)
        {
            var updatedRockstar = _rockstarService.Update(rockstar);
            if (updatedRockstar == null) return NotFound();
            var updatedRockstarDTO = new RockstarDTO(updatedRockstar);
            return Ok(updatedRockstarDTO);
        }

        public IActionResult Delete(int id)
        {
            _rockstarService.Delete(id);
            return Ok();
        }
    }
}