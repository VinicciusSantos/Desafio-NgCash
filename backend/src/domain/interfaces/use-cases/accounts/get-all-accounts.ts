import { AccountsResponseModel } from "../../../models/account-model";

export interface GetAllAccountsUseCase { 
    execute(): Promise<AccountsResponseModel[]>; 
}