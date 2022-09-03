import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCardAttribute1656756697092 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE TABLE "cardattribute"
                             (
                                 "id"      uuid              NOT NULL DEFAULT uuid_generate_v4(),
                                 "fr_name" character varying NOT NULL,
                                 "en_name" character varying NOT NULL,
                                 CONSTRAINT "PK_0c4967c6143edcb6e88681a0349" PRIMARY KEY ("id")
                             )`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cardattribute"`);
  }
}
