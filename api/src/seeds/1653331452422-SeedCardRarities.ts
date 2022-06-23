import { getRepository, MigrationInterface } from 'typeorm';
import { CardRaritySeed } from './cardrarity.seed';

export class SeedCardRarities1653331452422 implements MigrationInterface {
  public async up(): Promise<void> {
    await getRepository('cardrarity', 'seed').save(CardRaritySeed);
  }

  public async down(): Promise<void> {
    await getRepository('cardrarity', 'seed').clear();
  }
}
