import { MigrationInterface, QueryRunner } from "typeorm";

export class Validations1668688844812 implements MigrationInterface {
    name = 'Validations1668688844812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" ALTER COLUMN "balance" SET DEFAULT '100'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accounts" ALTER COLUMN "balance" DROP DEFAULT`);
    }

}
