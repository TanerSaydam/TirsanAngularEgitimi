namespace ExampleWebApi.Models;

public sealed class Todo
{
    public int Id { get; set; }
    public string Work { get; set; }
    public bool IsCompleted { get; set; }
    public DateTime CreatedDate { get; set; }
    public DateTime? UpdatedDate { get; set; }
}

