import { getRepository, MigrationInterface } from 'typeorm';
import { CardTypeSeed } from './cardtype.seed';

export class SeedCardType1655068804491 implements MigrationInterface {
  public async up(): Promise<void> {
    await getRepository('cardtype', 'seed').save(CardTypeSeed);
  }

  public async down(): Promise<void> {
    await getRepository('cardtype', 'seed').clear();
  }
}
