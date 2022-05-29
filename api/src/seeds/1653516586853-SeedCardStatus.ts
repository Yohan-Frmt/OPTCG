import { getRepository, MigrationInterface } from 'typeorm';
import { CardStatusSeed } from './cardstatus.seed';

export class SeedCardStatus1653516586853 implements MigrationInterface {
  public async up(): Promise<void> {
    await getRepository('cardstatus', 'seed').save(CardStatusSeed);
  }

  public async down(): Promise<void> {
    await getRepository('cardstatus', 'seed').clear();
  }
}
