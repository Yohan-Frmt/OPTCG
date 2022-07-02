import { MigrationInterface, QueryRunner } from 'typeorm';
import { CardStatusSeed } from './cardstatus.seed';

export class SeedCardStatus1653516586853 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardstatus').save(CardStatusSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardstatus').clear();
  }
}
