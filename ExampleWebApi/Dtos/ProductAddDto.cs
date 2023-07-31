namespace ExampleWebApi.Dtos;

public sealed record ProductAddDto(
    string Name,
    int Stock,
    decimal Price,
    IFormFile MainImage,
    List<IFormFile> Images = null);
