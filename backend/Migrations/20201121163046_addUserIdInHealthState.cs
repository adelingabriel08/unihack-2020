using Microsoft.EntityFrameworkCore.Migrations;

namespace unihack.Migrations
{
    public partial class addUserIdInHealthState : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "HealthStateEntities",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_HealthStateEntities_AspNetUsers_UserId",
                table: "HealthStateEntities");

            migrationBuilder.DropIndex(
                name: "IX_HealthStateEntities_UserId",
                table: "HealthStateEntities");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "HealthStateEntities");
        }
    }
}
