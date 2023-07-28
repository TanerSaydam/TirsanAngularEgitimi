namespace ExampleWebApi.Dtos;

public sealed record LoginDto(
    string EmailOrUserName,
    string Password,
    bool RememberMe = false);
