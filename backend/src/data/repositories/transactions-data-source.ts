import { Transactions } from "../../domain/entities/Transactions";
import { AppDataSource } from "../data-sources/type-orm-data-source";

export const TransactionsDataRepository = AppDataSource.getRepository(Transactions)