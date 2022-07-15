import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDeck1653312126674 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "deck"
       (
           "id"           uuid                  NOT NULL DEFAULT uuid_generate_v4(),
           "name"         character varying(50) NOT NULL,
           "leader"       character varying     NOT NULL,
           "content"      character varying     NOT NULL,
           "created_at"   TIMESTAMP             NOT NULL DEFAULT now(),
           "updated_at"   TIMESTAMP             NOT NULL DEFAULT now(),
           "description"  character varying     NOT NULL,
           "authorId"     uuid,
           "visibilityId" uuid,
           CONSTRAINT "PK_99f8010303acab0edf8e1df24f9" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "deck"`);
  }
}
