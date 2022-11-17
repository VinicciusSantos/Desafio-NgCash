import { Accounts } from "./Accounts";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from "typeorm";
import { Min, IsNotEmpty } from "class-validator";

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @Min(3)
  @IsNotEmpty()
  username: string;

  @Column()
  @Min(8)
  @IsNotEmpty()
  password: string;

  @OneToOne(() => Accounts)
  @JoinColumn()
  account: Accounts;
}
