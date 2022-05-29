import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCardImage1653477846332 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cardimage"
       (
           "id"     uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "path"   character varying NOT NULL,
           "cardId" uuid,
           CONSTRAINT "PK_2e1169b8f29d313e05561de50d8" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cardimage"`);
  }
}
