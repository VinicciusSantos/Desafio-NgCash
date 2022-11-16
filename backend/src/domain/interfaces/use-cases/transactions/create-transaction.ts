import { Transactions } from '../../../entities/Transacrions';
import { TransactionRequestModel } from './../../../models/transaction-model';

export interface CreateTransactionUseCase {
    execute(transaction: TransactionRequestModel): Promise<Transactions>;
}