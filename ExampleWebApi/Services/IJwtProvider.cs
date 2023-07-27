using ExampleWebApi.Dtos;
using ExampleWebApi.Models;

namespace ExampleWebApi.Services;

public interface IJwtProvider
{
    Task<LoginResponseDto> CreateToken(AppUser user);
}
