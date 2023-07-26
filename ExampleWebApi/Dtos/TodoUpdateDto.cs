namespace ExampleWebApi.Dtos;

public sealed record TodoUpdateDto
    (int Id,
    string Work,
    bool IsCompleted);
