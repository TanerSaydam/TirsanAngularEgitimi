using ExampleWebApi.Context;
using ExampleWebApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExampleWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UsersController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet("[action]/{id}")]
        public IActionResult GetRoles(string id, CancellationToken cancellationToken)
        {            
            var userMainRoles =
                _context.UserWithMainRoles.Where(p => p.UserId == id).Include(p=> p.MainRole).ToList();

            List<AppRole> roles = new();

            if(userMainRoles.Any(p => p.MainRole.Name != "Admin"))
            {
                roles = _context.Roles.ToList();
            }
            else
            {
                foreach (var mainRole in userMainRoles)
                {
                    var r = _context.MainRoleWithRoles.Where(p => p.MainRoleId == mainRole.MainRoleId)
                        .Include(p => p.Role)
                        .Select(s => s.Role)
                        .ToList();
                    roles.AddRange(r);
                }
            }            

            return Ok(roles);
        }
    }
}
