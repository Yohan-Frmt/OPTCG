import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddReferencesToRelationTableCardToCardColor1653478518058
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card_colors_cardcolor"
          ADD CONSTRAINT "FK_b9f8453149e099457d73823b372" FOREIGN KEY ("cardId") REFERENCES "card" ("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "card_colors_cardcolor"
          ADD CONSTRAINT "FK_edcc453f4a4e51e2f11b14b98a3" FOREIGN KEY ("cardcolorId") REFERENCES "cardcolor" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card_colors_cardcolor"
          DROP CONSTRAINT "FK_edcc453f4a4e51e2f11b14b98a3"`,
    );
    await queryRunner.query(
      `ALTER TABLE "card_colors_cardcolor"
          DROP CONSTRAINT "FK_b9f8453149e099457d73823b372"`,
    );
  }
}
