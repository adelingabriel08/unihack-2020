using Microsoft.EntityFrameworkCore.Migrations;

namespace unihack.Migrations
{
    public partial class hope1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<bool>(
                name: "Gender",
                table: "ProfileEntities",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "Fever",
                table: "HealthStateEntities",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "None_Symptom",
                table: "HealthStateEntities",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<int>(
                name: "Severity",
                table: "HealthStateEntities",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Fever",
                table: "HealthStateEntities");

            migrationBuilder.DropColumn(
                name: "None_Symptom",
                table: "HealthStateEntities");

            migrationBuilder.DropColumn(
                name: "Severity",
                table: "HealthStateEntities");

            migrationBuilder.AlterColumn<string>(
                name: "Gender",
                table: "ProfileEntities",
                nullable: true,
                oldClrType: typeof(bool));
        }
    }
}
