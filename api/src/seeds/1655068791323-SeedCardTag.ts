import { getRepository, MigrationInterface } from 'typeorm';
import { CardTagSeed } from './cardtag.seed';

export class SeedCardTag1655068791323 implements MigrationInterface {
  public async up(): Promise<void> {
    await getRepository('cardtag', 'seed').save(CardTagSeed);
  }

  public async down(): Promise<void> {
    await getRepository('cardtag', 'seed').clear();
  }
}
