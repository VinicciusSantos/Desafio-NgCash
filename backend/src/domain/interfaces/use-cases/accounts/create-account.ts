import { Accounts } from "../../../entities/Accounts";
import { AccountsResponseModel } from "../../../models/account-model";

export interface CreateAccountUseCase {
    execute(Account: Accounts): Promise<AccountsResponseModel>;
}