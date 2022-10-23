import { MigrationInterface, QueryRunner } from "typeorm";

export class AddSetReferenceToCardSet1666520969111 implements MigrationInterface {
    name = 'AddSetReferenceToCardSet1666520969111'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "cardset" ADD "set_number" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_1012d0af9145496f76476ff84a6"`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "UQ_1012d0af9145496f76476ff84a6" UNIQUE ("attributeId")`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_1012d0af9145496f76476ff84a6" FOREIGN KEY ("attributeId") REFERENCES "cardattribute"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE TABLE "query-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_114fbe61cafcf23227249f66816" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "query-cache"`);
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "FK_1012d0af9145496f76476ff84a6"`);
        await queryRunner.query(`ALTER TABLE "card" DROP CONSTRAINT "UQ_1012d0af9145496f76476ff84a6"`);
        await queryRunner.query(`ALTER TABLE "card" ADD CONSTRAINT "FK_1012d0af9145496f76476ff84a6" FOREIGN KEY ("attributeId") REFERENCES "cardattribute"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "cardset" DROP COLUMN "set_number"`);
    }

}
