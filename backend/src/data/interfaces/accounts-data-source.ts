import { Accounts } from "../../domain/entities/Accounts";
import { AppDataSource } from "../data-sources/type-orm-data-source";

export const accountsRepository = AppDataSource.getRepository(Accounts)