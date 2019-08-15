using System.Collections.Generic;

namespace RockstarResume.Services
{
    public interface IEntityService<TEntity>
    {
        IEnumerable<TEntity> Get();
        TEntity Get(int id);
        TEntity Update(TEntity entity);
        TEntity Create(TEntity entity);
        void Delete(int id);
    }
}