using System.Linq;
using Microsoft.AspNetCore.Mvc;
using RockstarResume.Model;
using RockstarResume.Model.DTOs;
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

        [HttpGet]
        public IActionResult Get()
        {
            var accountManagers = _accountManagerService.Get();
            var accountManagerDTOs = accountManagers.Select(accountManager => new AccountManagerDTO(accountManager));
            return Ok(accountManagerDTOs);
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            var accountManager = _accountManagerService.Get(id);
            if (accountManager == null) return NotFound();
            var accountManagerDTO = new AccountManagerDTO(accountManager);
            return Ok(accountManagerDTO);
        }

        [HttpPost]
        public IActionResult Post([FromBody] AccountManager accountManager)
        {
            if (!ModelState.IsValid) return BadRequest();
            var createdAccountManager = _accountManagerService.Create(accountManager);
            if (createdAccountManager == null) return BadRequest();
            var createdAccountMangerDTO = new AccountManagerDTO(createdAccountManager);
            return Ok(createdAccountMangerDTO);
        }

        [HttpPut]
        public IActionResult Put([FromBody] AccountManager accountManager)
        {
            if (!ModelState.IsValid) return BadRequest();
            var updatedAccountManager = _accountManagerService.Update(accountManager);
            if (updatedAccountManager == null) return NotFound();
            var updatedAccountManagerDTO = new AccountManagerDTO(updatedAccountManager);
            return Ok(updatedAccountManagerDTO);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _accountManagerService.Delete(id);
            return Ok();
        }
        
        [HttpOptions]
        public IActionResult Options()
        {
            return Ok();
        }
    }
}