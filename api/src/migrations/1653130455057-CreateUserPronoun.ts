import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserPronoun1653130455057 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "userpronoun"
       (
           "id"      uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "fr_name" character varying NOT NULL,
           "en_name" character varying NOT NULL,
           CONSTRAINT "PK_ea6338f5dcc5a77e205fec29abb" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "userpronoun"`);
  }
}
