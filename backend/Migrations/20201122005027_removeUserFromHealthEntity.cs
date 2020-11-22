using Microsoft.EntityFrameworkCore.Migrations;

namespace unihack.Migrations
{
    public partial class removeUserFromHealthEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HealthStateEntities_AspNetUsers_UserId",
                table: "HealthStateEntities");

            migrationBuilder.DropIndex(
                name: "IX_HealthStateEntities_UserId",
                table: "HealthStateEntities");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "HealthStateEntities",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "HealthStateEntities",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_HealthStateEntities_UserId",
                table: "HealthStateEntities",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_HealthStateEntities_AspNetUsers_UserId",
                table: "HealthStateEntities",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
