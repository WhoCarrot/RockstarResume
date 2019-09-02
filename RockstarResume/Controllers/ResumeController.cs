using System.Linq;
using Microsoft.AspNetCore.Mvc;
using RockstarResume.Model;
using RockstarResume.Model.DTOs;
using RockstarResume.Services;

namespace RockstarResume.App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ResumeController : ControllerBase
    {
        private readonly ResumeService _resumeService;

        public ResumeController(ResumeService resumeService)
        {
            _resumeService = resumeService;
        }

        public IActionResult Get()
        {
            var resumes = _resumeService.Get();
            var resumeDTOs = resumes.Select(resume => new ResumeDTO(resume));
            return Ok(resumeDTOs);
        }

        public IActionResult Get(int id)
        {
            var resume = _resumeService.Get(id);
            var resumeDTO = new ResumeDTO(resume);
            return Ok(resumeDTO);
        }

        public IActionResult Post(Resume resume)
        {
            var createdResume = _resumeService.Create(resume);
            if (createdResume == null) return BadRequest();
            var createdResumeDTO = new ResumeDTO(createdResume);
            return Ok(createdResumeDTO);
        }

        public IActionResult Put(Resume resume)
        {
            var updatedResume = _resumeService.Update(resume);
            if (updatedResume == null) return NotFound();
            var updatedResumeDTO = new ResumeDTO(updatedResume);
            return Ok(updatedResumeDTO);
        }

        public IActionResult Delete(int id)
        {
            _resumeService.Delete(id);
            return Ok();
        }
    }
}