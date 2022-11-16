import { Accounts } from './Accounts';
import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm"

@Entity()
export class Users {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string

    @Column()
    password: string

    @OneToOne(() => Accounts)
    @JoinColumn()
    account: Accounts
}
