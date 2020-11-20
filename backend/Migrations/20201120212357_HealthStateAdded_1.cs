using Microsoft.EntityFrameworkCore.Migrations;

namespace unihack.Migrations
{
    public partial class HealthStateAdded_1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "HealthStateEntities",
                columns: table => new
                {
                    Id = table.Column<string>(nullable: false),
                    Deleted = table.Column<bool>(nullable: false),
                    Temperature = table.Column<float>(nullable: false),
                    DryCough = table.Column<bool>(nullable: false),
                    RunnyNose = table.Column<bool>(nullable: false),
                    TiredNess = table.Column<bool>(nullable: false),
                    DifficultyInBreathing = table.Column<bool>(nullable: false),
                    SoreThroat = table.Column<bool>(nullable: false),
                    Pains = table.Column<bool>(nullable: false),
                    NasalCongestion = table.Column<bool>(nullable: false),
                    Diarrhea = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HealthStateEntities", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "HealthStateEntities");
        }
    }
}
