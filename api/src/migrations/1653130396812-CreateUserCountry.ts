import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateUserCountry1653130396812 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "usercountry"
       (
           "id"       uuid              NOT NULL DEFAULT uuid_generate_v4(),
           "fr_name"  character varying NOT NULL,
           "en_name"  character varying NOT NULL,
           "iso_code" character varying NOT NULL,
           CONSTRAINT "PK_e2fbe21421bdd1f64006b7e5a74" PRIMARY KEY ("id")
       )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "usercountry"`);
  }
}
