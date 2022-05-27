import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { CardStatusSeed } from './cardstatus.seed';

export class SeedCardStatus1653516586853 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('cardstatus', 'seed').save(CardStatusSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getRepository('cardstatus', 'seed').clear();
  }
}
