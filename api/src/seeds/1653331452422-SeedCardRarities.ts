import { MigrationInterface, QueryRunner } from 'typeorm';
import { CardRaritySeed } from './cardrarity.seed';

export class SeedCardRarities1653331452422 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardrarity').save(CardRaritySeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardrarity').clear();
  }
}
