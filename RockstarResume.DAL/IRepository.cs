using System.Collections.Generic;

namespace RockstarResume.DAL
{
    public interface IRepository<TEntity>
    {
        IEnumerable<TEntity> Get();
        TEntity Get(int id);
        TEntity Update(TEntity entity);
        TEntity Create(TEntity entity);
        void Delete(int id);
    }
}