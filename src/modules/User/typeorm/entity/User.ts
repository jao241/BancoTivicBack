import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity("users")
export default class User{
    @PrimaryGeneratedColumn("uuid")
    id:string;
    @Column()
    name:string;
    @Column()
    password:string;
    @Column()
    idAccount:string;
    @CreateDateColumn()
    createdAt:Date;
    @UpdateDateColumn()
    updatedAt:Date;
}