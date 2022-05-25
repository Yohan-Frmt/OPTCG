import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserReferencesToDeck1653312252690
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "deck" ADD CONSTRAINT "FK_906348be74aae476c41bec3e74c" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "deck" DROP CONSTRAINT "FK_906348be74aae476c41bec3e74c"`,
    );
  }
}
