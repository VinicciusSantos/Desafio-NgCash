import { Transactions } from "../../../entities/Transacrions";

export interface CreateTransactionUseCase {
    execute(Account: Transactions): Promise<boolean>;
}