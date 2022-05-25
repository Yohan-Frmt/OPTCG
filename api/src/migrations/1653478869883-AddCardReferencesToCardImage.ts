import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCardReferencesToCardImage1653478869883
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cardimage" ADD CONSTRAINT "FK_0f8f1cae6c0c27e67a0771c3461" FOREIGN KEY ("cardId") REFERENCES "card"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cardimage" DROP CONSTRAINT "FK_0f8f1cae6c0c27e67a0771c3461"`,
    );
  }
}
