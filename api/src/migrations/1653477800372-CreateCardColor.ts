import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCardColor1653477800372 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cardcolor"
       (
           "id"        uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "fr_name"   character varying NOT NULL,
           "en_name"   character varying NOT NULL,
           "hex_color" character varying NOT NULL,
           CONSTRAINT "PK_1be4d37f00b40a4af81af81a5f9" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cardcolor"`);
  }
}
