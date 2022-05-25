import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { CardRaritySeed } from './cardrarity.seed';

export class SeedCardRarities1653331452422 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await getRepository('cardrarity', 'seed').save(CardRaritySeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await getRepository('cardrarity', 'seed').clear();
  }
}
