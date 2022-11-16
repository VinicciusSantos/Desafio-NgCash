import { Transactions } from './../../domain/entities/Transacrions';
import { AppDataSource } from "../data-sources/type-orm-data-source";

export const TransactionsDataRepository = AppDataSource.getRepository(Transactions)