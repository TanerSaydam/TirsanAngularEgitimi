using ExampleWebApi.Models;

public sealed record ProductUpdateDto(
    string Id,
    string Name,
    int Stock,
    decimal Price,    
    List<string> ProductImages,
    IFormFile MainImage = null,
    List<IFormFile> Images = null);
