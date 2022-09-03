import { MigrationInterface, QueryRunner } from 'typeorm';
import { CardImageSeed } from './cardimage.seed';

export class SeedCardImage1655071241687 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardimage').save(CardImageSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardimage').clear();
  }
}
