import { Accounts } from "../../entities/Accounts";

export interface AccountsRepository {
    createAccount(account: Accounts): Promise<Accounts>;
    getAccounts(): Promise<Accounts[]>
}
