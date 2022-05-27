import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCardSet1653477648738 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cardset" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fr_name" character varying NOT NULL, "en_name" character varying NOT NULL, CONSTRAINT "PK_c67fb3d3847d3ffc3455e268b96" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cardset"`);
  }
}
