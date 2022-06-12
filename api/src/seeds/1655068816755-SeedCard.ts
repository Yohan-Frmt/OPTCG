import { getRepository, MigrationInterface } from 'typeorm';
import { CardSeed } from './card.seed';

export class SeedCard1655068816755 implements MigrationInterface {
  public async up(): Promise<void> {
    await getRepository('card', 'seed').save(CardSeed);
  }

  public async down(): Promise<void> {
    await getRepository('card', 'seed').clear();
  }
}
