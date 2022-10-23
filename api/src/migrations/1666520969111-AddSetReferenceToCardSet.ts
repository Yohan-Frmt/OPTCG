import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSetReferenceToCardSet1666520969111 implements MigrationInterface {
    name = 'AddSetReferenceToCardSet1666520969111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cardset" ADD "set_number" character varying NOT NULL`);
        await queryRunner.query(`CREATE TABLE "query-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_114fbe61cafcf23227249f66816" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "query-cache"`);
        await queryRunner.query(`ALTER TABLE "cardset" DROP COLUMN "set_number"`);
    }

}
