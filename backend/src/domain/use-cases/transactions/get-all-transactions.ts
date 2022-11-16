import { TransactionsDataRepository } from "../../../data/interfaces/transactions-data-source";
import { TransactionsRepository } from "../../interfaces/repositories/transactions-repository";
import { GetAllTransactionsUseCase } from "../../interfaces/use-cases/transactions/get-all-transactions";
import { Transactions } from '../../entities/Transacrions';

export class GetAllTransactions implements GetAllTransactionsUseCase {
    TransactionsDataRepository: TransactionsRepository
    constructor(TransactionsDataRepository: TransactionsRepository) {
        this.TransactionsDataRepository = TransactionsDataRepository
    }

    async execute(): Promise<Transactions[]> {
        return TransactionsDataRepository.find();
    }
}