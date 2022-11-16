import { Accounts } from '../entities/Accounts';

export interface AccountsDataSource {
    create(account: Accounts): Promise<boolean>;
    getAll(): Promise<Accounts[]>;
}