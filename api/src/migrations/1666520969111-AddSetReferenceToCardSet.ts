import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddSetReferenceToCardSet1666520969111
  implements MigrationInterface
{
  name = 'AddSetReferenceToCardSet1666520969111';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "cardset" ADD "set_number" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "cardset" DROP COLUMN "set_number"`);
  }
}
