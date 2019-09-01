using System.Linq;
using Microsoft.AspNetCore.Mvc;
using RockstarResume.Model;
using RockstarResume.Services;

namespace RockstarResume.App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountManagerController : ControllerBase
    {
        private readonly AccountManagerService _accountManagerService;

        public AccountManagerController(AccountManagerService accountManagerService)
        {
            _accountManagerService = accountManagerService;
        }

        public IActionResult Get()
        {
            var accountManagers = _accountManagerService.Get();
            var accountManagerDTOs = accountManagers.Select(accountManager => new AccountManagerDTO(accountManager));
            return Ok(accountManagerDTOs);
        }

        public IActionResult Get(int id)
        {
            var accountManager = _accountManagerService.Get(id);
            var accountManagerDTO = new AccountManagerDTO(accountManager);
            return Ok(accountManagerDTO);
        }

        public IActionResult Post(AccountManager accountManager)
        {
            var createdAccountManager = _accountManagerService.Create(accountManager);
            if (createdAccountManager == null) return BadRequest();
            var createdAccountMangerDTO = new AccountManagerDTO(createdAccountManager);
            return Ok(createdAccountMangerDTO);
        }

        public IActionResult Put(AccountManager accountManager)
        {
            var updatedAccountManager = _accountManagerService.Update(accountManager);
            if (updatedAccountManager == null) return NotFound();
            var updatedAccountManagerDTO = new AccountManagerDTO(updatedAccountManager);
            return Ok(updatedAccountManagerDTO);
        }

        public IActionResult Delete(int id)
        {
            _accountManagerService.Delete(id);
            return Ok();
        }
    }
}