using System.ComponentModel.DataAnnotations.Schema;

namespace ExampleWebApi.Models;

public sealed class MainRoleWithRole
{
    public int Id { get; set; }
    [ForeignKey("MainRole")]
    public int MainRoleId { get; set; }
    public MainRole MainRole { get; set; }

    [ForeignKey("Role")]
    public string RoleId { get; set; }
    public AppRole Role { get; set; }
}
