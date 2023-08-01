using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ExampleWebApi.Migrations
{
    /// <inheritdoc />
    public partial class mg3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Section",
                table: "Roles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Title",
                table: "Roles",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "MainRoles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MainRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "MainRoleWithRoles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MainRoleId = table.Column<int>(type: "int", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MainRoleWithRoles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_MainRoleWithRoles_MainRoles_MainRoleId",
                        column: x => x.MainRoleId,
                        principalTable: "MainRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MainRoleWithRoles_Roles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "Roles",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateTable(
                name: "UserWithMainRoles",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MainRoleId = table.Column<int>(type: "int", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserWithMainRoles", x => x.Id);
                    table.ForeignKey(
                        name: "FK_UserWithMainRoles_MainRoles_MainRoleId",
                        column: x => x.MainRoleId,
                        principalTable: "MainRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_UserWithMainRoles_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_MainRoleWithRoles_MainRoleId",
                table: "MainRoleWithRoles",
                column: "MainRoleId");

            migrationBuilder.CreateIndex(
                name: "IX_MainRoleWithRoles_RoleId",
                table: "MainRoleWithRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "IX_UserWithMainRoles_MainRoleId",
                table: "UserWithMainRoles",
                column: "MainRoleId");

            migrationBuilder.CreateIndex(
                name: "IX_UserWithMainRoles_UserId",
                table: "UserWithMainRoles",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MainRoleWithRoles");

            migrationBuilder.DropTable(
                name: "UserWithMainRoles");

            migrationBuilder.DropTable(
                name: "MainRoles");

            migrationBuilder.DropColumn(
                name: "Section",
                table: "Roles");

            migrationBuilder.DropColumn(
                name: "Title",
                table: "Roles");
        }
    }
}
