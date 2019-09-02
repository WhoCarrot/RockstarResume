using System.IO;
using System.Linq;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        private readonly RockstarService _rockstarService;

        public ExportController(ExportService exportService, ResumeService resumeService, RockstarService rockstarService)
        {
            _exportService = exportService;
            _resumeService = resumeService;
            _rockstarService = rockstarService;
        }

        [Route("{resumeId}")]
        public IActionResult Get(int resumeId)
        {
            //MemoryStream ms;

            //using (ms = new MemoryStream())
            //{
            //    using (WordprocessingDocument wordDocument = WordprocessingDocument.Create(ms, WordprocessingDocumentType.Document))
            //    {
            //        MainDocumentPart mainPart = wordDocument.AddMainDocumentPart();

            //        mainPart.Document = new Document(
            //            new Body(
            //                new Paragraph(
            //                    new Run(
            //                        new Text("Hello world!")))));
            //    }
            //}

            //return File(ms.ToArray(), "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "Test.docx");
            var resume = _resumeService.Get().Where(r => r.Id == resumeId).Include(r => r.Rockstar).FirstOrDefault();
            if (resume == null) return NotFound();
            var documentStream = _exportService.ExportDocx(resume);
            return File(documentStream,
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                "Resume.docx");
        }
    }
}
