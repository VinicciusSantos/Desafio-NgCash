export interface DebitedAccount {
    id: number;
    username: string;
    password: string;
}

export interface CreditedAccount {
    id: number;
    username: string;
    password: string;
}

export interface Transaction {
    id: number;
    value: number;
    createdAt: Date;
    debitedAccount: DebitedAccount;
    creditedAccount: CreditedAccount;
}

export interface Account {
    id: number;
    balance: number;
}

export interface User {
    id: number;
    username: string;
    password: string;
    account: Account;
}

export interface RootObject {
    message: string;
    transactions: Transaction[];
    user: User;
}