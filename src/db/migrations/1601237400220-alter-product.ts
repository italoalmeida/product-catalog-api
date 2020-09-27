import {MigrationInterface, QueryRunner} from "typeorm";

export class alterProduct1601237400220 implements MigrationInterface {
    name = 'alterProduct1601237400220'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `product` ADD `description` varchar(5000) NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP COLUMN `description`");
        await queryRunner.query("ALTER TABLE `product` ADD `description` varchar(255) NOT NULL");
    }

}
