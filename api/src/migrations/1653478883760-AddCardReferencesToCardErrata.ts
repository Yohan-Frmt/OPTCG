import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCardReferencesToCardErrata1653478883760
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "carderrata" ADD CONSTRAINT "FK_04c008ad27d0d9efb5057bbc52e" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "carderrata" DROP CONSTRAINT "FK_04c008ad27d0d9efb5057bbc52e"`,
    );
  }
}
