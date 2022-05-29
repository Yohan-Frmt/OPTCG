import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserStore1653130482490 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "userstore"
       (
           "id"       uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "address1" character varying NOT NULL,
           "address2" character varying NOT NULL,
           "zip_code" character varying NOT NULL,
           "city"     character varying NOT NULL,
           "userId"   uuid,
           CONSTRAINT "PK_cd98a91cbdd088f53173025c515" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "userstore"`);
  }
}
