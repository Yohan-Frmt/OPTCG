import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCardErrata1653477963170 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "carderrata"
       (
           "id"          uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "date"        TIMESTAMP         NOT NULL DEFAULT now(),
           "description" character varying NOT NULL,
           "cardId"      uuid,
           CONSTRAINT "PK_7310842844d1822985f77090fa5" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "carderrata"`);
  }
}
