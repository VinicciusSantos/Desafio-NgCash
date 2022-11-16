import { UsersDataRepository } from "../../../data/interfaces/users-data-source";
import { Users } from "../../entities/Users";
import { UsersRepository } from "../../interfaces/repositories/users-repository";
import { GetAllUsersUseCase } from "../../interfaces/use-cases/users/get-all-users";

export class GetAllUser implements GetAllUsersUseCase {
    UsersDataRepository: UsersRepository
    constructor(UsersDataRepository: UsersRepository) {
        this.UsersDataRepository = UsersDataRepository
    }

    async execute(): Promise<Users[]> {
        return UsersDataRepository.find();
    }
}