import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDeckVisibility1653312172723 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "deckvisibility" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fr_name" character varying NOT NULL, "en_name" character varying NOT NULL, CONSTRAINT "PK_7d61691c309f1f3e9f367c2104c" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "deckvisibility"`);
  }
}
