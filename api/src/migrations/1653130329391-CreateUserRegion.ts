import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserRegion1653130329391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "userregion" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fr_name" character varying NOT NULL, "en_name" character varying NOT NULL, "countryId" uuid, CONSTRAINT "PK_88aaeba0afec8a1b93c8c036aaa" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "userregion"`);
  }
}
