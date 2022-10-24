import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateQueryCache1653130328210 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "query-cache"
       (
           "id"       integer NOT NULL,
           identifier character varying,
           "time"     bigint  NOT NULL,
           duration   integer NOT NULL,
           "query"    text    NOT NULL,
           result     text    NOT NULL,
           CONSTRAINT "PK_114fbe61cafcf23227249f66816" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "query-cache"`);
  }
}
