using System.Collections.Generic;
using System.Linq;
using RockstarResume.DAL;
using RockstarResume.Model;

namespace RockstarResume.Services
{
    public class ResumeService : IEntityService<Resume>
    {
        private readonly IRepository<Resume> _resumeRepository;

        public ResumeService(IRepository<Resume> resumeRepository)
        {
            _resumeRepository = resumeRepository;
        }

        public IQueryable<Resume> Get() => _resumeRepository.Get();
        public Resume Get(int id) => _resumeRepository.Get(id);
        public Resume Update(Resume resume) => _resumeRepository.Update(resume);
        public Resume Create(Resume resume) => _resumeRepository.Create(resume);
        public void Delete(int id) => _resumeRepository.Delete(id);
    }
}
