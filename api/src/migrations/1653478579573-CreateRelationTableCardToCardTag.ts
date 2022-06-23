import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelationTableCardToCardTag1653478579573
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "card_tags_cardtag"
       (
           "cardId"    uuid NOT NULL,
           "cardtagId" uuid NOT NULL,
           CONSTRAINT "PK_e344cdb985b720b674de19fd430" PRIMARY KEY ("cardId", "cardtagId")
       )`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_d4656a4bd792fc9c85b2378da5" ON "card_tags_cardtag" ("cardId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_00b351885d3b93691e71aaf8ab" ON "card_tags_cardtag" ("cardtagId") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_00b351885d3b93691e71aaf8ab"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_d4656a4bd792fc9c85b2378da5"`,
    );
    await queryRunner.query(`DROP TABLE "card_tags_cardtag"`);
  }
}
