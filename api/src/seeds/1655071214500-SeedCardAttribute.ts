import { MigrationInterface, QueryRunner } from 'typeorm';
import { CardAttributeSeed } from './cardattribute.seed';

export class SeedCardAttribute1655071214500 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager
      .getRepository('cardattribute')
      .save(CardAttributeSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardattribute').clear();
  }
}
