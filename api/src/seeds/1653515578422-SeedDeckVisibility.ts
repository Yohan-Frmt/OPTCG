import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { DeckVisibilitySeed } from './deckvisibility.seed';

export class SeedDeckVisibility1653515578422 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('deckvisibility', 'seed').save(DeckVisibilitySeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getRepository('deckvisibility', 'seed').clear();
  }
}
