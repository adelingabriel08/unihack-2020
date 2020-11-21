using Microsoft.EntityFrameworkCore.Migrations;

namespace unihack.Migrations
{
    public partial class Profile_Updade : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "HealthStateId",
                table: "ProfileEntities",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProfileEntities_HealthStateId",
                table: "ProfileEntities",
                column: "HealthStateId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProfileEntities_HealthStateEntities_HealthStateId",
                table: "ProfileEntities",
                column: "HealthStateId",
                principalTable: "HealthStateEntities",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProfileEntities_HealthStateEntities_HealthStateId",
                table: "ProfileEntities");

            migrationBuilder.DropIndex(
                name: "IX_ProfileEntities_HealthStateId",
                table: "ProfileEntities");

            migrationBuilder.DropColumn(
                name: "HealthStateId",
                table: "ProfileEntities");
        }
    }
}
