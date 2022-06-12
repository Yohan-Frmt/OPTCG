import { getRepository, MigrationInterface } from 'typeorm';
import { CardImageSeed } from './cardimage.seed';

export class SeedCardImage1655071241687 implements MigrationInterface {
  public async up(): Promise<void> {
    await getRepository('cardimage', 'seed').save(CardImageSeed);
  }

  public async down(): Promise<void> {
    await getRepository('cardimage', 'seed').clear();
  }
}
