import {MigrationInterface, QueryRunner} from "typeorm";

export class createProduct1600560910992 implements MigrationInterface {
    name = 'createProduct1600560910992'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `product` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, `price` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `user_id` int NOT NULL, UNIQUE INDEX `IDX_22cc43e9a74d7498546e9a63e7` (`name`), PRIMARY KEY (`id`, `user_id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `product` ADD CONSTRAINT `FK_3e59a34134d840e83c2010fac9a` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `product` DROP FOREIGN KEY `FK_3e59a34134d840e83c2010fac9a`");
        await queryRunner.query("DROP INDEX `IDX_22cc43e9a74d7498546e9a63e7` ON `product`");
        await queryRunner.query("DROP TABLE `product`");
    }

}
