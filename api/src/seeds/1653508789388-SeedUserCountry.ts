import { MigrationInterface, QueryRunner } from 'typeorm';
import { UserCountrySeed } from './usercountry.seed';

export class SeedUserCountry1653508789388 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository('usercountry')
      .save(UserCountrySeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('usercountry').clear();
  }
}
