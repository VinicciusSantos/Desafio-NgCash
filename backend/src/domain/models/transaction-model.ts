import { Accounts } from './../entities/Accounts';
export interface TransactionRequestModel {
  debitedAccountId: Accounts;
  creditedAccountId: Accounts;
  value: number;
}

export interface TransactionResponseModel {
  id: number;
  debitedAccount: Accounts;
  creditedAccount: Accounts;
  value: number;
  createdAt: Date;
}
