using ExampleWebApi.Dtos;
using ExampleWebApi.Models;
using ExampleWebApi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ExampleWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly IJwtProvider _jwtProvider;

        public AuthController(UserManager<AppUser> userManager, IJwtProvider jwtProvider)
        {
            _userManager = userManager;
            _jwtProvider = jwtProvider;
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Register(RegisterDto request, CancellationToken cancellationToken)
        {
            string userName = request.UserName.ToLower().Trim().Replace(" ", "");

            AppUser user = await _userManager.FindByEmailAsync(request.Email);
            if(user != null)
            {
                throw new Exception("Bu mail adresi daha önce kullanılmış!");
            }
            user = await _userManager.FindByNameAsync(userName);
            if(user != null)
            {
                throw new Exception("Bu kullanıcı adı daha önce kullanılmış!");
            }

            user = new AppUser()
            {
                Id = Guid.NewGuid().ToString(),
                UserName = userName,
                Email = request.Email,
                NameLastName = request.Name
            };

            IdentityResult result = await _userManager.CreateAsync(user, request.Password);
            if (result.Succeeded)
            {
                LoginResponseDto response = await _jwtProvider.CreateToken(user, false);
                return Ok(response);
            }
            else
            {
                throw new Exception(result.Errors.First().Description);
            }
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Login(LoginDto request)
        {
            AppUser user = await _userManager.FindByEmailAsync(request.EmailOrUserName);
            if (user == null)
            {
                user = await _userManager.FindByNameAsync(request.EmailOrUserName);
                if(user == null)
                    throw new UnauthorizedAccessException("Kullanıcı bulunamadı!");
            }

            bool result = await _userManager.CheckPasswordAsync(user, request.Password);
            if (result)
            {
                LoginResponseDto response = await _jwtProvider.CreateToken(user,request.RememberMe);
                return Ok(response);
            }
            else
                throw new UnauthorizedAccessException("Şifre yanlış!");
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> LoginByRefreshToken(LoginByRefreshTokenDto request)
        {
            AppUser user = await _userManager.Users.Where(p=> p.RefreshToken == request.RefreshToken).FirstOrDefaultAsync();
            if (user == null)
            {
                throw new UnauthorizedAccessException("Kullanıcı bulunamadı!");
            }
            LoginResponseDto response = await _jwtProvider.CreateToken(user, false);
            return Ok(response);
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> GetNewTokenByRefreshToken(GetNewTokenDto request)
        {
            AppUser user = await _userManager.Users.Where(p => p.RefreshToken == request.RefreshToken).FirstOrDefaultAsync();
            if(user == null)
                throw new UnauthorizedAccessException("Kullanıcı bulunamadı!");
            LoginResponseDto response = await _jwtProvider.CreateToken(user,false);
            return Ok(response);
        }
    }
}
