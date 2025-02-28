import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUser1653130560706 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user"
       (
           "id"         uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "email"      character varying NOT NULL,
           "username"   character varying NOT NULL,
           "password"   character varying NOT NULL,
           "isActive"   boolean           NOT NULL DEFAULT true,
           "discord"    character varying,
           "isStore"    boolean           NOT NULL DEFAULT false,
           "created_at" TIMESTAMP         NOT NULL DEFAULT now(),
           "last_login" TIMESTAMP WITH TIME ZONE,
           "countryId"  uuid,
           "regionId"   uuid,
           CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"),
           CONSTRAINT "UQ_78a916df40e02a9deb1c4b75edb" UNIQUE ("username"),
           CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "user"`);
  }
}
