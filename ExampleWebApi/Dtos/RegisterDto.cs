namespace ExampleWebApi.Dtos;

public sealed record RegisterDto(
    string Email,
    string Name,
    string Password,
    string UserName);

