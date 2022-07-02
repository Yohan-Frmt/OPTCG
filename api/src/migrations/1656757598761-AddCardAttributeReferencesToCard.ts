import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCardAttributeReferencesToCard1656757598761
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "card"
        ADD CONSTRAINT "FK_1012d0af9145496f76476ff84a6" FOREIGN KEY ("attributeId") REFERENCES "cardattribute" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "card"
        DROP CONSTRAINT "FK_1012d0af9145496f76476ff84a6"`);
  }
}
