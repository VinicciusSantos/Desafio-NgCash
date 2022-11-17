import { Users } from "../../domain/entities/Users";
import { AppDataSource } from "../data-sources/type-orm-data-source";

export const UsersDataRepository = AppDataSource.getRepository(Users)