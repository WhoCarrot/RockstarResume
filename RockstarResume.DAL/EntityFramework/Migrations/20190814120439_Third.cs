using System;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RockstarResume.DAL.Migrations
{
    public partial class Third : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AccountManagers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(nullable: true),
                    Surname = table.Column<string>(nullable: true),
                    Birthay = table.Column<DateTime>(nullable: false),
                    Region = table.Column<int>(nullable: false),
                    EmailAddress = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AccountManagers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Rockstars",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    FirstName = table.Column<string>(nullable: true),
                    Surname = table.Column<string>(nullable: true),
                    Birthay = table.Column<DateTime>(nullable: false),
                    Region = table.Column<int>(nullable: false),
                    EmailAddress = table.Column<string>(nullable: true),
                    PhoneNumber = table.Column<string>(nullable: true),
                    PictureUrl = table.Column<string>(nullable: true),
                    Nationality = table.Column<string>(nullable: true),
                    DriversLicense = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Rockstars", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Resumes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    AccountManagerId = table.Column<int>(nullable: true),
                    RockstarId = table.Column<int>(nullable: true),
                    Language = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Resumes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Resumes_AccountManagers_AccountManagerId",
                        column: x => x.AccountManagerId,
                        principalTable: "AccountManagers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Resumes_Rockstars_RockstarId",
                        column: x => x.RockstarId,
                        principalTable: "Rockstars",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateTable(
                name: "RockstarProperty",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    RockstarId = table.Column<int>(nullable: true),
                    Discriminator = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RockstarProperty", x => x.Id);
                    table.ForeignKey(
                        name: "FK_RockstarProperty_Rockstars_RockstarId",
                        column: x => x.RockstarId,
                        principalTable: "Rockstars",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Resumes_AccountManagerId",
                table: "Resumes",
                column: "AccountManagerId");

            migrationBuilder.CreateIndex(
                name: "IX_Resumes_RockstarId",
                table: "Resumes",
                column: "RockstarId");

            migrationBuilder.CreateIndex(
                name: "IX_RockstarProperty_RockstarId",
                table: "RockstarProperty",
                column: "RockstarId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Resumes");

            migrationBuilder.DropTable(
                name: "RockstarProperty");

            migrationBuilder.DropTable(
                name: "AccountManagers");

            migrationBuilder.DropTable(
                name: "Rockstars");
        }
    }
}
