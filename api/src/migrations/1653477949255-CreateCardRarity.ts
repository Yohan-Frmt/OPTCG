import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCardRarity1653477949255 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cardrarity"
       (
           "id"      uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "fr_name" character varying NOT NULL,
           "en_name" character varying NOT NULL,
           "abbr"    character varying NOT NULL,
           CONSTRAINT "PK_909d6a4e2c6632c0faf6e67aac2" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cardrarity"`);
  }
}
