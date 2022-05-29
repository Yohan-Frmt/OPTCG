import { getRepository, MigrationInterface } from 'typeorm';
import { UserCountrySeed } from './usercountry.seed';

export class SeedUserCountry1653508789388 implements MigrationInterface {
  public async up(): Promise<void> {
    await getRepository('usercountry', 'seed').save(UserCountrySeed);
  }

  public async down(): Promise<void> {
    await getRepository('usercountry', 'seed').clear();
  }
}
