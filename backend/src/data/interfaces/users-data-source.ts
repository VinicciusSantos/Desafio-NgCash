import { Users } from "../../domain/entities/Users";
import { AppDataSource } from "../data-sources/type-orm-data-source";

export const usersRepository = AppDataSource.getRepository(Users)