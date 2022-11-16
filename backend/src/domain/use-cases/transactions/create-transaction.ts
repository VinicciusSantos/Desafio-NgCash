import { CreateTransactionUseCase } from './../../interfaces/use-cases/transactions/create-transaction';
import { TransactionsDataRepository } from "../../../data/interfaces/transactions-data-source";
import { TransactionsRepository } from "../../interfaces/repositories/transactions-repository";
import { TransactionRequestModel } from '../../models/transaction-model';
import { Transactions } from '../../entities/Transacrions';

export class CreateTransaction implements CreateTransactionUseCase {
    TransactionsDataRepository: TransactionsRepository
    constructor(TransactionsDataRepository: TransactionsRepository) {
        this.TransactionsDataRepository = TransactionsDataRepository
    }

    async execute(transaction: TransactionRequestModel): Promise<Transactions> {
        return TransactionsDataRepository.save(transaction);
    }
}