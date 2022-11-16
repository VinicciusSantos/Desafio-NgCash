import { Users } from "./Users";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn } from "typeorm";

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Users)
  @JoinColumn()
  debitedAccountId: Users;

  @OneToOne(() => Users)
  @JoinColumn()
  creditedAccountId: Users;

  @Column()
  value: number;

  @CreateDateColumn()
  createdAt: Date;
}
