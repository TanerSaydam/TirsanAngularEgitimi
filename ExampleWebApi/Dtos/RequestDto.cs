namespace ExampleWebApi.Dtos;

public sealed record RequestDto(
    int PageNumber = 1,
    int PageSize = 5,
    string Search = "");
