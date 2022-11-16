import { Transactions } from "../../entities/Transacrions";

export interface TransactionsRepository {
    createTransaction(transaction: Transactions): Promise<Transactions>;
    getTransactions(): Promise<Transactions[]>
}
