import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddReferencesToRelationTableCardToCardTag1653478612889
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card_tags_cardtag"
          ADD CONSTRAINT "FK_d4656a4bd792fc9c85b2378da57" FOREIGN KEY ("cardId") REFERENCES "card" ("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "card_tags_cardtag"
          ADD CONSTRAINT "FK_00b351885d3b93691e71aaf8abe" FOREIGN KEY ("cardtagId") REFERENCES "cardtag" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card_tags_cardtag"
          DROP CONSTRAINT "FK_00b351885d3b93691e71aaf8abe"`,
    );
    await queryRunner.query(
      `ALTER TABLE "card_tags_cardtag"
          DROP CONSTRAINT "FK_d4656a4bd792fc9c85b2378da57"`,
    );
  }
}
