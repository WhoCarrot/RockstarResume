using System.Linq;
using RockstarResume.DAL;
using RockstarResume.Model;

namespace RockstarResume.Services
{
    public class RockstarService : IEntityService<Rockstar>
    {
        private readonly IRepository<Rockstar> _rockstarRepository;

        public RockstarService(IRepository<Rockstar> rockstarRepository)
        {
            _rockstarRepository = rockstarRepository;
        }

        public IQueryable<Rockstar> Get() => _rockstarRepository.Get();
        public Rockstar Get(int id) => _rockstarRepository.Get(id);
        public Rockstar Update(Rockstar rockstar) => _rockstarRepository.Update(rockstar);
        public Rockstar Create(Rockstar rockstar) => _rockstarRepository.Create(rockstar);
        public void Delete(int id) => _rockstarRepository.Delete(id);
    }
}
