import { Accounts } from "../../../entities/Accounts";

export interface GetAllAccountsUseCase { 
    execute(): Promise<Accounts[]>; 
}