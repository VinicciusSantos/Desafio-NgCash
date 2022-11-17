import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Accounts {

    @PrimaryGeneratedColumn()
    id: number

    @Column({default: 100})
    balance: number
}
