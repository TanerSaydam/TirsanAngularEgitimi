using System.ComponentModel.DataAnnotations.Schema;

namespace ExampleWebApi.Models;

public sealed class UserWithMainRole
{
    public int Id { get; set; }

    [ForeignKey("MainRole")]
    public int MainRoleId { get; set; }
    public MainRole MainRole { get; set; }

    [ForeignKey("User")]
    public string UserId { get; set; }
    public AppUser User { get; set; }
}
