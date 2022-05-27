import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCardStatusReferencesToCard1653478928312
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card" ADD CONSTRAINT "FK_43ac2bbb294b960c7f8ea103949" FOREIGN KEY ("statusId") REFERENCES "cardstatus"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "card" DROP CONSTRAINT "FK_43ac2bbb294b960c7f8ea103949"`,
    );
  }
}
