using System.Linq;
using Microsoft.AspNetCore.Mvc;
using RockstarResume.Model;
using RockstarResume.Model.DTOs;
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

        [HttpGet]
        public IActionResult Get()
        {
            var rockstars = _rockstarService.Get();
            var rockstarDTOs = rockstars.Select(rockstar => new RockstarDTO(rockstar));
            return Ok(rockstarDTOs);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var rockstar = _rockstarService.Get(id);
            if (rockstar == null) return NotFound();
            var rockstarDTO = new RockstarDTO(rockstar);
            return Ok(rockstarDTO);
        }

        [HttpPost]
        public IActionResult Post([FromBody] Rockstar rockstar)
        {
            if (!ModelState.IsValid) return BadRequest();
            var createdRockstar = _rockstarService.Create(rockstar);
            if (createdRockstar == null) return BadRequest();
            var createdRockstarDTO = new RockstarDTO(createdRockstar);
            return Ok(createdRockstarDTO);
        }

        [HttpPut]
        public IActionResult Put([FromBody] Rockstar rockstar)
        {
            if (!ModelState.IsValid) return BadRequest();
            var updatedRockstar = _rockstarService.Update(rockstar);
            if (updatedRockstar == null) return NotFound();
            var updatedRockstarDTO = new RockstarDTO(updatedRockstar);
            return Ok(updatedRockstarDTO);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _rockstarService.Delete(id);
            return Ok();
        }

        [HttpOptions]
        public IActionResult Options()
        {
            return Ok();
        }
    }
}