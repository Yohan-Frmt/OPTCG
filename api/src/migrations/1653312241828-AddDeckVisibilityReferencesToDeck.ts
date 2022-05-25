import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddDeckVisibilityReferencesToDeck1653312241828
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "deck" ADD CONSTRAINT "FK_1ea0a56d9939bd1762c43811e83" FOREIGN KEY ("visibilityId") REFERENCES "deckvisibility"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "deck" DROP CONSTRAINT "FK_1ea0a56d9939bd1762c43811e83"`,
    );
  }
}
