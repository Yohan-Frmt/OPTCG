import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateCard1653478073694 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "card"
       (
           "id"            uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "serial_number" character varying NOT NULL,
           "fr_name"       character varying NOT NULL,
           "en_name"       character varying NOT NULL,
           "jp_name"       character varying NOT NULL,
           "cost"          integer           NOT NULL,
           "power"         integer           NOT NULL,
           "life"          integer           NOT NULL,
           "fr_effect"     character varying NOT NULL,
           "en_effect"     character varying NOT NULL,
           "counter"       integer           NOT NULL,
           "setId"         uuid,
           "typeId"        uuid,
           "statusId"      uuid,
           CONSTRAINT "PK_9451069b6f1199730791a7f4ae4" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "card"`);
  }
}
