using System.IO;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
using Newtonsoft.Json;
using RockstarResume.Model;

namespace RockstarResume.Logic.Services
{
    public class ExportService
    {
        /// <summary>
        /// For demo purposes, write the rockstar firstname and lastname to a docx file and return the byte array.
        /// </summary>
        /// <param name="resume"></param>
        /// <returns></returns>
        public MemoryStream ExportDocx(Resume resume)
        {
            var memoryStream = new MemoryStream();
            using (var document = WordprocessingDocument.Create(memoryStream, WordprocessingDocumentType.Document, true))
            {
                var mainPart = document.AddMainDocumentPart();

                var run = new Run();
                run.AppendChild(
                    new Text($"Dit is een demo CV van {resume.Rockstar.FirstName} {resume.Rockstar.LastName}!"));
                run.AppendChild(new Break());
                run.AppendChild(new Break());
                run.AppendChild(
                    new Text($"{JsonConvert.SerializeObject(resume.Rockstar.Nationality, Formatting.Indented)}"));

                mainPart.Document = new Document(
                    new Body(
                        new Paragraph(
                            run)));
            }

            memoryStream.Seek(0, SeekOrigin.Begin);

            return memoryStream;
        }

    }
}
