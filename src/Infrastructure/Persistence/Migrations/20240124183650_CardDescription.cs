using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ShopExample.Infrastructure.Persistence.Migrations
{
    /// <inheritdoc />
    public partial class CardDescription : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Description",
                table: "Cards",
                type: "nvarchar(max)",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Description",
                table: "Cards");
        }
    }
}
