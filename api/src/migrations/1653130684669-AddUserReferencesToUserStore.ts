import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUserReferencesToUserStore1653130684669
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "userstore"
          ADD CONSTRAINT "FK_9a21336f4fc42668843678b6474" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "userstore"
          DROP CONSTRAINT "FK_9a21336f4fc42668843678b6474"`,
    );
  }
}
