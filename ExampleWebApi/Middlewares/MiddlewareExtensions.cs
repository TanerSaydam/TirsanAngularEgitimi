using ExampleWebApi.Models;
using Microsoft.AspNetCore.Identity;

namespace ExampleWebApi.Middlewares;

public static class MiddlewareExtensions
{
    public static IApplicationBuilder UseMiddlewareExtensions(this IApplicationBuilder app)
    {
        app.UseMiddleware<ExceptionMiddleware>();
        return app;
    }

    public static IHost CreateUser(this IHost host)
    {
        using (var scoped = host.Services.CreateScope())
        {
            var userManager = scoped.ServiceProvider.GetRequiredService<UserManager<AppUser>>();
            if (!userManager.Users.Any())
            {
                userManager.CreateAsync(new AppUser
                {
                    UserName = "tsaydam",
                    Email = "tanersaydam@gmail.com",
                    Id = Guid.NewGuid().ToString(),
                    NameLastName = "Taner Saydam",                   
                }, "1").Wait();
            }
        }

        return host;
    }

}
