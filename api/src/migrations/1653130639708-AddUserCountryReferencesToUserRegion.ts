import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserCountryReferencesToUserRegion1653130639708
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "userregion"
          ADD CONSTRAINT "FK_bd96cb37cce347c264886df0692" FOREIGN KEY ("countryId") REFERENCES "usercountry" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "userregion"
          DROP CONSTRAINT "FK_bd96cb37cce347c264886df0692"`,
    );
  }
}
