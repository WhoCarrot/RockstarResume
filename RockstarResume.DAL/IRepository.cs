using System.Collections.Generic;
using System.Linq;

namespace RockstarResume.DAL
{
    public interface IRepository
    {

    }
    public interface IRepository<TEntity> : IRepository
    {
        IQueryable<TEntity> Get();
        TEntity Get(int id);
        TEntity Update(TEntity entity);
        TEntity Create(TEntity entity);
        void Delete(int id);
    }
}