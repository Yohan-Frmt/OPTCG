import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRelationTableCardToCardRarity1653478694564
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "card_rarities_cardrarity"
       (
           "cardId"       uuid NOT NULL,
           "cardrarityId" uuid NOT NULL,
           CONSTRAINT "PK_336d928e71819b4311f5639cda7" PRIMARY KEY ("cardId", "cardrarityId")
       )`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_030dddcc9abd0501e1c1f164ab" ON "card_rarities_cardrarity" ("cardId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4ad22281246ac7196527cd3dc2" ON "card_rarities_cardrarity" ("cardrarityId") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_4ad22281246ac7196527cd3dc2"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_030dddcc9abd0501e1c1f164ab"`,
    );
    await queryRunner.query(`DROP TABLE "card_rarities_cardrarity"`);
  }
}
