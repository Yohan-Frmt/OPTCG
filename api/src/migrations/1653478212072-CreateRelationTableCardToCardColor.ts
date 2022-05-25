import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelationTableCardToCardColor1653478212072
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "card_colors_cardcolor" ("cardId" uuid NOT NULL, "cardcolorId" uuid NOT NULL, CONSTRAINT "PK_754f5649900ab50e898d6bd4478" PRIMARY KEY ("cardId", "cardcolorId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b9f8453149e099457d73823b37" ON "card_colors_cardcolor" ("cardId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_edcc453f4a4e51e2f11b14b98a" ON "card_colors_cardcolor" ("cardcolorId") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_edcc453f4a4e51e2f11b14b98a"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b9f8453149e099457d73823b37"`,
    );
    await queryRunner.query(`DROP TABLE "card_colors_cardcolor"`);
  }
}
