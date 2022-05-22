import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDeckAndVisibility1653252123896 implements MigrationInterface {
    name = 'CreateDeckAndVisibility1653252123896'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "deck_visibility" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fr_name" character varying NOT NULL, "en_name" character varying NOT NULL, CONSTRAINT "PK_7d61691c309f1f3e9f367c2104c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "deck" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(50) NOT NULL, "content" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "description" character varying NOT NULL, "authorId" uuid, "visibilityId" uuid, CONSTRAINT "PK_99f8010303acab0edf8e1df24f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "deck" ADD CONSTRAINT "FK_906348be74aae476c41bec3e74c" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "deck" ADD CONSTRAINT "FK_1ea0a56d9939bd1762c43811e83" FOREIGN KEY ("visibilityId") REFERENCES "deck_visibility"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "deck" DROP CONSTRAINT "FK_1ea0a56d9939bd1762c43811e83"`);
        await queryRunner.query(`ALTER TABLE "deck" DROP CONSTRAINT "FK_906348be74aae476c41bec3e74c"`);
        await queryRunner.query(`DROP TABLE "deck"`);
        await queryRunner.query(`DROP TABLE "deck_visibility"`);
    }

}
