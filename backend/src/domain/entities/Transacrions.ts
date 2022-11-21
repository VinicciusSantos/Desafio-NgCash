import { Users } from "./Users";
import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn } from "typeorm";
import { IsDate, IsNotEmpty } from "class-validator";

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Users)
  @JoinColumn()
  @IsNotEmpty()
  debitedAccountId: Users;

  @OneToOne(() => Users)
  @JoinColumn()
  @IsNotEmpty()
  creditedAccountId: Users;

  @Column()
  @IsNotEmpty()
  value: number;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;
}
