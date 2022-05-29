import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCardTag1653477830007 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cardtag"
       (
           "id"      uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "fr_name" character varying NOT NULL,
           "en_name" character varying NOT NULL,
           CONSTRAINT "PK_76ae838e54f57b3e1f93a224814" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cardtag"`);
  }
}
