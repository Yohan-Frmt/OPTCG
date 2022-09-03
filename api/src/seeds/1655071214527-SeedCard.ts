import { MigrationInterface, QueryRunner } from 'typeorm';
import { CardSeed } from './card.seed';

export class SeedCard1655071214527 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('card').save(CardSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('card').clear();
  }
}
