import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("accounts")
export default class Account{
    @PrimaryGeneratedColumn("uuid")
    id:string;
    @Column("real")
    balance:number;
    @CreateDateColumn()
    createdAt:Date;
    @UpdateDateColumn()
    updatedAt:Date;
}