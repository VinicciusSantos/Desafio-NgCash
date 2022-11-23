export interface Account {
    id: number;
    balance: number;
}

export interface Transactions {
    cashIn: any[];
    cashOut: any[];
}

export interface User {
    id: number;
    username: string;
}

export interface RootObject {
    message: string;
    account: Account;
    transactions: Transactions;
    user: User;
}