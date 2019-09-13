using System.Linq;
using RockstarResume.Model;

namespace RockstarResume.DAL.EntityFramework
{
    public class EntityFrameworkRepository<TEntity> : IRepository<TEntity> where TEntity : BaseEntity
    {
        private readonly RockstarResumeContext _context;

        public EntityFrameworkRepository(RockstarResumeContext context)
        {
            _context = context;
        }

        public IQueryable<TEntity> Get()
        {
            return _context.Set<TEntity>();
        }

        public TEntity Get(int id)
        {
            return _context.Find<TEntity>(id);
        }

        public TEntity Update(TEntity newEntity)
        {
            var entity = Get(newEntity.Id);
            if (entity == null) return null;

            _context.Entry(entity).CurrentValues.SetValues(newEntity);
            _context.SaveChanges();

            return Get(newEntity.Id);
        }

        public TEntity Create(TEntity entity)
        {
            var createdEntityEntry = _context.Add(entity);
            return createdEntityEntry.Entity;
        }

        public void Delete(int id)
        {
            var entity = Get(id);
            if (entity == null) return;
            _context.Remove(entity);
        }
    }
}
