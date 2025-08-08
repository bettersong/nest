import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' }) // 表名
export class User {

    @PrimaryGeneratedColumn() // 自增主键
    id: number;

    @Column() // 字段
    name: string;
}
