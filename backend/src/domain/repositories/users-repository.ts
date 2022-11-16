import { Users } from '../entities/Users';
import { Transactions } from './../entities/Transacrions';

export interface TransactionsDataSource {
    create(user: Users): Promise<boolean>;
    getAll(): Promise<Transactions[]>;
}