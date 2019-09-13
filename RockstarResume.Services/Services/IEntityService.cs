using System.Linq;

namespace RockstarResume.Services
{
    public interface IEntityService<TEntity>
    {
        IQueryable<TEntity> Get();
        TEntity Get(int id);
        TEntity Update(TEntity entity);
        TEntity Create(TEntity entity);
        void Delete(int id);
    }
}