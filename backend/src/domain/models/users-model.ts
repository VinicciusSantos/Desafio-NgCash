import { Accounts } from './../entities/Accounts';

export interface UserRequestModel {
  username: string;
  password: string;
}

export interface UserResponseModel {
  id: number;
  username: string;
  password: string;
  accountId?: Accounts
}
