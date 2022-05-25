import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { CardColorSeed } from './cardcolor.seed';

export class SeedCardColor1653330542636 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('cardcolor', 'seed').save(CardColorSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getRepository('cardcolor', 'seed').clear();
  }
}
