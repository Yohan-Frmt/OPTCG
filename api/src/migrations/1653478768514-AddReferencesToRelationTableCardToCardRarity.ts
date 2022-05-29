import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddReferencesToRelationTableCardToCardRarity1653478768514
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card_rarities_cardrarity"
          ADD CONSTRAINT "FK_030dddcc9abd0501e1c1f164abf" FOREIGN KEY ("cardId") REFERENCES "card" ("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "card_rarities_cardrarity"
          ADD CONSTRAINT "FK_4ad22281246ac7196527cd3dc24" FOREIGN KEY ("cardrarityId") REFERENCES "cardrarity" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card_rarities_cardrarity"
          DROP CONSTRAINT "FK_4ad22281246ac7196527cd3dc24"`,
    );
    await queryRunner.query(
      `ALTER TABLE "card_rarities_cardrarity"
          DROP CONSTRAINT "FK_030dddcc9abd0501e1c1f164abf"`,
    );
  }
}
