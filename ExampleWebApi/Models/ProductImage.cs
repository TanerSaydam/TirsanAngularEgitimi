using System.ComponentModel.DataAnnotations.Schema;

namespace ExampleWebApi.Models;

public sealed class ProductImage
{
    public int Id { get; set; }

    [ForeignKey("Product")]
    public int ProductId { get; set; }
    public string ImageUrl { get; set; }
}
