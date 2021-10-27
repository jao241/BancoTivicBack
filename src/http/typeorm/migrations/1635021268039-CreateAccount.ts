import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAccount1635021268039 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "accounts",
            columns:[
                {
                    name: "id",
                    type: "varchar",
                    generationStrategy: "uuid",
                    isGenerated: true,
                    isPrimary: true
                },
                {
                    name: "balance",
                    type: "real",
                },
                {
                    name: "createdAt",
                    type: "timestamp with time zone",
                    default: "now()"
                },
                {
                    name: "updatedAt",
                    type: "timestamp with time zone",
                    default: "now()"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("accounts");
    }

}
