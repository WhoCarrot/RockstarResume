using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RockstarResume.Logic.Services;
using RockstarResume.Services;

namespace RockstarResume.App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExportController : ControllerBase
    {
        private readonly ExportService _exportService;
        private readonly ResumeService _resumeService;
        private readonly RockstarService _rockstarService;

        public ExportController(ExportService exportService, ResumeService resumeService, RockstarService rockstarService)
        {
            _exportService = exportService;
            _resumeService = resumeService;
            _rockstarService = rockstarService;
        }

        [HttpGet("{resumeId}")]
        public IActionResult Get(int resumeId)
        {
            var resume = _resumeService.Get().Where(r => r.Id == resumeId).Include(r => r.Rockstar).FirstOrDefault();
            if (resume == null) return NotFound();
            var documentStream = _exportService.ExportDocx(resume);
            return File(documentStream,
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "Resume.docx");
        }

        [HttpOptions]
        public IActionResult Options()
        {
            return Ok();
        }
    }
}
