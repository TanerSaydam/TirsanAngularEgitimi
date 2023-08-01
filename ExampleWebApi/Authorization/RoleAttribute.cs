using ExampleWebApi.Context;
using ExampleWebApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.EntityFrameworkCore;

namespace ExampleWebApi.Authorization
{
    public sealed class RoleAttribute : Attribute, IAuthorizationFilter
    {
        private readonly AppDbContext _context;
        private readonly string _role;
        private readonly string _title;
        public RoleAttribute(AppDbContext context, string role, string title)
        {
            _context = context;
            _role = role;
            _title = title;
        }

        public void OnAuthorization(AuthorizationFilterContext context)
        {
            var userClaimId = context.HttpContext.User.FindFirst("id");
            if (userClaimId == null)
            {
                context.Result = new UnauthorizedResult();
                return;
            }

            var userMainRoles =
                _context.UserWithMainRoles.Where(p => p.UserId == userClaimId.Value).ToList();

            List<AppRole> roles = new();

            if (userMainRoles.Any(p=> p.MainRole.Name != "Admin"))
            {
                foreach (var mainRole in userMainRoles)
                {
                    var r = _context.MainRoleWithRoles.Where(p => p.MainRoleId == mainRole.MainRoleId)
                        .Include(p => p.Role)
                        .Select(s => s.Role)
                        .ToList();
                    roles.AddRange(r);
                }

                if (!roles.Any(p => p.Name == _role && p.Title == _title))
                {
                    context.Result = new UnauthorizedResult();
                    return;
                }
            }

            

            
        }
    }
}
