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
        public byte[] ExportDocx(Resume resume)
        {
            using (var memoryStream = new MemoryStream())
            {
                using (var document = WordprocessingDocument.Create(memoryStream, WordprocessingDocumentType.Document, true))
                {
                    var mainPart = document.AddMainDocumentPart();
                    
                    mainPart.Document = new Document();
                    var documentBody = new Body();

                    var paragraph = new Paragraph();
                    var run = new Run();;
                    var text = new Text($"Dit is een demo CV van {resume.Rockstar.FirstName} {resume.Rockstar.LastName}!");

                    run.AppendChild(text);
                    paragraph.AppendChild(run);
                    documentBody.AppendChild(paragraph);
                }

                return memoryStream.ToArray();
            }
        }
    }
}
