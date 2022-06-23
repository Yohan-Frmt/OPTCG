import { getRepository, MigrationInterface } from 'typeorm';
import { CardColorSeed } from './cardcolor.seed';

export class SeedCardColor1653330542636 implements MigrationInterface {
  public async up(): Promise<void> {
    await getRepository('cardcolor', 'seed').save(CardColorSeed);
  }

  public async down(): Promise<void> {
    await getRepository('cardcolor', 'seed').clear();
  }
}
