import { Users } from "./Users";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
import { IsDate, IsNotEmpty } from "class-validator";

@Entity()
export class Transactions {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users)
  @JoinColumn()
  @IsNotEmpty()
  debitedAccount: Users;

  @ManyToOne(() => Users)
  @JoinColumn()
  @IsNotEmpty()
  creditedAccount: Users;

  @Column()
  @IsNotEmpty()
  value: number;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;
}
