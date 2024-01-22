using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShopExample.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class PersonalAutoChanges : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "issueYear",
                table: "Autos",
                newName: "IssueYear");

            migrationBuilder.RenameColumn(
                name: "Modelname",
                table: "Autos",
                newName: "ModelName");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "PersonalAutos",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserId",
                table: "PersonalAutos");

            migrationBuilder.RenameColumn(
                name: "ModelName",
                table: "Autos",
                newName: "Modelname");

            migrationBuilder.RenameColumn(
                name: "IssueYear",
                table: "Autos",
                newName: "issueYear");
        }
    }
}
