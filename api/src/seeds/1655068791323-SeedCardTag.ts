import { MigrationInterface, QueryRunner } from 'typeorm';
import { CardTagSeed } from './cardtag.seed';

export class SeedCardTag1655068791323 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardtag').save(CardTagSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardtag').clear();
  }
}
