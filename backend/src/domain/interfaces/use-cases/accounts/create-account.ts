import { Accounts } from "../../../entities/Accounts";

export interface CreateAccountUseCase {
    execute(Account: Accounts): Promise<boolean>;
}