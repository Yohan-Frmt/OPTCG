import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCardStatus1653477812977 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "cardstatus"
       (
           "id"         uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "fr_name"    character varying NOT NULL,
           "en_name"    character varying NOT NULL,
           "max_amount" integer           NOT NULL,
           CONSTRAINT "PK_4f2e1b96c461acbdb0b2422cced" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "cardstatus"`);
  }
}
