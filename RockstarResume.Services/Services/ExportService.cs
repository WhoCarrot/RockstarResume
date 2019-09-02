using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using DocumentFormat.OpenXml;
using DocumentFormat.OpenXml.InkML;
using DocumentFormat.OpenXml.Packaging;
using DocumentFormat.OpenXml.Wordprocessing;
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
                //var mainPart = document.AddMainDocumentPart();

                //mainPart.Document = new Document();
                //var body = mainPart.Document.AppendChild(new Body());
                //var para = body.AppendChild(new Paragraph());
                //var run = para.AppendChild(new Run());
                //run.AppendChild(new Text($"Dit is een demo CV van {resume.Rockstar.FirstName} {resume.Rockstar.LastName}!"));


                var mainPart = document.AddMainDocumentPart();

                mainPart.Document = new Document(
                    new Body(
                        new Paragraph(
                            new Run(
                                new Text($"Dit is een demo CV van {resume.Rockstar.FirstName} {resume.Rockstar.LastName}!")))));
                //    }
                //mainPart.Document = new Document();
                //var documentBody = new Body();

                //var paragraph = documentBody.AppendChild(new Paragraph());
                //var run = paragraph.AppendChild(new Run());
                //run.AppendChild(new Text($"Dit is een demo CV van {resume.Rockstar.FirstName} {resume.Rockstar.LastName}!"));
            }

            memoryStream.Seek(0, SeekOrigin.Begin);

            return memoryStream;
        }

    }
}
