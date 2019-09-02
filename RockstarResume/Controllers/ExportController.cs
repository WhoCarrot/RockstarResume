using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;
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

        public ExportController(ExportService exportService, ResumeService resumeService)
        {
            _exportService = exportService;
            _resumeService = resumeService;
        }

        public IActionResult Get(int resumeId)
        {
            var resume = _resumeService.Get(resumeId);
            if (resume == null) return NotFound();
            var documentBytes = _exportService.ExportDocx(resume);
            return new FileContentResult(documentBytes, MediaTypeHeaderValue.Parse("docx"));
        }
    }
}
