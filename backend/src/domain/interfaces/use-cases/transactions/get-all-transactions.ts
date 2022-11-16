import { Transactions } from "../../../entities/Transacrions";

export interface GetAllTransactionsUseCase { 
    execute(): Promise<Transactions[]>; 
}