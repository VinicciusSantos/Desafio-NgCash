import { Transactions } from './../entities/Transacrions';

export interface TransactionsDataSource {
    create(transaction: Transactions): Promise<boolean>;
    getAll(): Promise<Transactions[]>;
}