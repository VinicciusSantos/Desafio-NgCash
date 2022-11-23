
    export interface DebitedAccount {
        id: number;
        username: string;
        password: string;
    }

    export interface CashIn {
        id: number;
        value: number;
        createdAt: Date;
        debitedAccount: DebitedAccount;
    }

    export interface CreditedAccount {
        id: number;
        username: string;
        password: string;
    }

    export interface CashOut {
        id: number;
        value: number;
        createdAt: Date;
        creditedAccount: CreditedAccount;
    }

    export interface Transactions {
        cashIn: CashIn[];
        cashOut: CashOut[];
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