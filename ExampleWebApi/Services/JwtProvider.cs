using ExampleWebApi.Dtos;
using ExampleWebApi.Models;
using ExampleWebApi.OptionsSetup;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;

namespace ExampleWebApi.Services;

public sealed class JwtProvider : IJwtProvider
{
    private readonly JwtOptions _jwtOptions;
    private readonly UserManager<AppUser> _userManager;
    public JwtProvider(IOptions<JwtOptions> jwtOptions, UserManager<AppUser> userManager)
    {
        _jwtOptions = jwtOptions.Value;
        _userManager = userManager;
    }

    public async Task<LoginResponseDto> CreateToken(AppUser user, bool rememberMe)
    {
        var claims = new Claim[]
        {
            new Claim("name", user.NameLastName),
            new Claim("email", user.Email),
            new Claim("id", user.Id)
        };

        DateTime expires = DateTime.Now.AddSeconds(10);
        //if(rememberMe) expires = expires.AddMonths(1);

        JwtSecurityToken jwtSecurityToken = new(
            issuer: _jwtOptions.Issuer,
            audience: _jwtOptions.Audience,
            claims: claims,
            notBefore: DateTime.Now,
            expires: expires,
            signingCredentials: new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_jwtOptions.SecretKey)),SecurityAlgorithms.HmacSha256));

        string token = new JwtSecurityTokenHandler().WriteToken(jwtSecurityToken);

        string refreshToken = Convert.ToBase64String(RandomNumberGenerator.GetBytes(32));
        user.RefreshToken = refreshToken;
        user.RefreshTokenExpires = expires.AddHours(1);
        await _userManager.UpdateAsync(user);

        return new(token, refreshToken, user.RefreshTokenExpires, user.Id);
    }
}
