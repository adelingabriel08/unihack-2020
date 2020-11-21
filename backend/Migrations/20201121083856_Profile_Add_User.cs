using Microsoft.EntityFrameworkCore.Migrations;

namespace unihack.Migrations
{
    public partial class Profile_Add_User : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserType",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "ProfileEntities",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_ProfileEntities_UserId",
                table: "ProfileEntities",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_ProfileEntities_AspNetUsers_UserId",
                table: "ProfileEntities",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_ProfileEntities_AspNetUsers_UserId",
                table: "ProfileEntities");

            migrationBuilder.DropIndex(
                name: "IX_ProfileEntities_UserId",
                table: "ProfileEntities");

            migrationBuilder.AlterColumn<string>(
                name: "UserId",
                table: "ProfileEntities",
                nullable: true,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<int>(
                name: "UserType",
                table: "AspNetUsers",
                nullable: false,
                defaultValue: 0);
        }
    }
}
