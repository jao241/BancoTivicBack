import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1635008707412 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "users",
            columns:[
                {
                    name: "id",
                    type: "uuid",
                    generationStrategy: "uuid",
                    isGenerated: true,
                    isPrimary: true
                },
                {
                    name: "name",
                    type: "varchar"
                },
                {
                    name: "password",
                    type: "varchar"
                },
                {
                    name: "idAccount",
                    type: "varchar"
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
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
