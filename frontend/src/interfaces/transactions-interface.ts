export interface DebitedAccountId {
    id: number;
    username: string;
    password: string;
}

export interface CreditedAccountId {
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

export interface CashOut {
    id: number;
    value: number;
    createdAt: Date;
    creditedAccountId: CreditedAccountId;
}

export interface Transactions {
    cashIn: CashIn[];
    cashOut: CashOut[];
}