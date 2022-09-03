import { MigrationInterface, QueryRunner } from 'typeorm';
import { CardTypeSeed } from './cardtype.seed';

export class SeedCardType1655068804491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardtype').save(CardTypeSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository('cardtype').clear();
  }
}
