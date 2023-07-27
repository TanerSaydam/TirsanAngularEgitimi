namespace ExampleWebApi.Dtos;

public sealed record LoginResponseDto(
    string Token,
    string RefreshToken,
    DateTime RefreshTokenExpires,
    string UserId);
