import { MigrationInterface, QueryRunner } from 'typeorm';
import { CardSetSeed } from './cardset.seed';

export class SeedCardSet1655068681398 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardset').save(CardSetSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardset').clear();
  }
}
