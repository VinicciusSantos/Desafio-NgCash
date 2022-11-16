import { Accounts } from "../../domain/entities/Accounts";
import { AppDataSource } from "../data-sources/type-orm-data-source";

export const AccountsDataRepository = AppDataSource.getRepository(Accounts)