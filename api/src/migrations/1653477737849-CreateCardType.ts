import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCardType1653477737849 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cardtype"
       (
           "id"      uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "fr_name" character varying NOT NULL,
           "en_name" character varying NOT NULL,
           CONSTRAINT "PK_b5019ebadd82bf0367293d7e3dc" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cardtype"`);
  }
}
