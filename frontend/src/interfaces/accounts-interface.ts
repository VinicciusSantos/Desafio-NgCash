export interface DebitedAccountId {
    id: number;
    username: string;
    password: string;
}

export interface CashIn {
    id: number;
    value: number;
    createdAt: Date;
    debitedAccountId: DebitedAccountId;
}

export interface Transactions {
    cashIn: CashIn[];
    cashOut: any[];
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
    transactions: Transactions;
    user: User;
}