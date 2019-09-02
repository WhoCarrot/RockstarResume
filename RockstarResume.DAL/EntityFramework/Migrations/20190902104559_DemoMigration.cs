using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace RockstarResume.DAL.Migrations
{
    public partial class DemoMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Discriminator",
                table: "RockstarProperty");

            migrationBuilder.DropColumn(
                name: "Birthay",
                table: "AccountManagers");

            migrationBuilder.DropColumn(
                name: "Region",
                table: "AccountManagers");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "Rockstars",
                newName: "LastName");

            migrationBuilder.RenameColumn(
                name: "Birthay",
                table: "Rockstars",
                newName: "Birthday");

            migrationBuilder.RenameColumn(
                name: "Surname",
                table: "AccountManagers",
                newName: "LastName");

            migrationBuilder.AddColumn<int>(
                name: "RockstarPropertyId",
                table: "Resumes",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Resumes_RockstarPropertyId",
                table: "Resumes",
                column: "RockstarPropertyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Resumes_RockstarProperty_RockstarPropertyId",
                table: "Resumes",
                column: "RockstarPropertyId",
                principalTable: "RockstarProperty",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Resumes_RockstarProperty_RockstarPropertyId",
                table: "Resumes");

            migrationBuilder.DropIndex(
                name: "IX_Resumes_RockstarPropertyId",
                table: "Resumes");

            migrationBuilder.DropColumn(
                name: "RockstarPropertyId",
                table: "Resumes");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "Rockstars",
                newName: "Surname");

            migrationBuilder.RenameColumn(
                name: "Birthday",
                table: "Rockstars",
                newName: "Birthay");

            migrationBuilder.RenameColumn(
                name: "LastName",
                table: "AccountManagers",
                newName: "Surname");

            migrationBuilder.AddColumn<string>(
                name: "Discriminator",
                table: "RockstarProperty",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "Birthay",
                table: "AccountManagers",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<int>(
                name: "Region",
                table: "AccountManagers",
                nullable: false,
                defaultValue: 0);
        }
    }
}
