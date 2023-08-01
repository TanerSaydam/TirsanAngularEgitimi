using Microsoft.AspNetCore.Mvc;

namespace ExampleWebApi.Authorization
{
    public sealed class RoleFilterAttribute : TypeFilterAttribute
    {
        public RoleFilterAttribute(string role, string title) : base(typeof(RoleAttribute))
        { 
            Arguments = new object[] { role, title };
        }
    }
}
