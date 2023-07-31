namespace ExampleWebApi.Models;

public sealed class Product
{
    public Product()
    {
        Id = Guid.NewGuid();
    }
    public Guid Id { get; set; }
    public string Name { get; set; }
    public int Stock { get; set; }
    public decimal Price { get; set; } 
    public string MainImageUrl { get; set; }
    public ICollection<ProductImage> ProductImages { get; set;}
}
