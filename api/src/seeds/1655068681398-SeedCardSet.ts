import { getRepository, MigrationInterface } from 'typeorm';
import { CardSetSeed } from './cardset.seed';

export class SeedCardSet1655068681398 implements MigrationInterface {
  public async up(): Promise<void> {
    await getRepository('cardset', 'seed').save(CardSetSeed);
  }

  public async down(): Promise<void> {
    await getRepository('cardset', 'seed').clear();
  }
}
