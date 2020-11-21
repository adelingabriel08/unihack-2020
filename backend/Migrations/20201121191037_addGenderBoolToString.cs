using Microsoft.EntityFrameworkCore.Migrations;

namespace unihack.Migrations
{
    public partial class addGenderBoolToString : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Gender",
                table: "ProfileEntities",
                nullable: true,
                oldClrType: typeof(bool));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Gender",
                table: "ProfileEntities",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);
        }
    }
}
