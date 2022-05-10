import { Entity, PrimaryGeneratedColumn, Column, Generated, CreateDateColumn, UpdateDateColumn } from 'typeorm';
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string
}