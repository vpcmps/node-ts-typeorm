import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateCategories1658525365150 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categories",
                columns:[{
                    name: "id",
                    type: "uuid",
                    isPrimary: true
                }]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
