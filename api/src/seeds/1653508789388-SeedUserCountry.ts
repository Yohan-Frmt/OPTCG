import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { UserCountrySeed } from './usercountry.seed';

export class SeedUserCountry1653508789388 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('usercountry', 'seed').save(UserCountrySeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getRepository('usercountry', 'seed').clear();
  }
}
