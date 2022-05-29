import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCardTypeReferencesToCard1653478914221
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card"
          ADD CONSTRAINT "FK_89f4ce8ff7f2618884e7b75c026" FOREIGN KEY ("typeId") REFERENCES "cardtype" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card"
          DROP CONSTRAINT "FK_89f4ce8ff7f2618884e7b75c026"`,
    );
  }
}
