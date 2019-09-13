using System.Linq;
using RockstarResume.DAL;
using RockstarResume.Model;

namespace RockstarResume.Services
{
    public class AccountManagerService : IEntityService<AccountManager>
    {
        private readonly IRepository<AccountManager> _accountManagerRepository;

        public AccountManagerService(IRepository<AccountManager> accountManagerRepository)
        {
            _accountManagerRepository = accountManagerRepository;
        }

        public IQueryable<AccountManager> Get() => _accountManagerRepository.Get();

        public AccountManager Get(int id) => _accountManagerRepository.Get(id);

        public AccountManager Update(AccountManager accountManager) => _accountManagerRepository.Update(accountManager);

        public AccountManager Create(AccountManager accountManager) => _accountManagerRepository.Create(accountManager);

        public void Delete(int id) => _accountManagerRepository.Delete(id);
    }
}
