import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCardSetReferencesToCard1653478900216
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card"
          ADD CONSTRAINT "FK_5c54def213ff8487c2bf6a06d40" FOREIGN KEY ("setId") REFERENCES "cardset" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card"
          DROP CONSTRAINT "FK_5c54def213ff8487c2bf6a06d40"`,
    );
  }
}
