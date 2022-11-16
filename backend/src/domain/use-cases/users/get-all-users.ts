import { GetAllUsersUseCase } from './../../interfaces/use-cases/users/get-all-users';
import { Users } from "../../entities/Users";
import { UsersRepository } from "../../interfaces/repositories/users-repository";

export class GetAllUsers implements GetAllUsersUseCase {
    usersRepository: UsersRepository
    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository
    }

    async execute(): Promise<Users[]> {
        const result = await this.usersRepository.getUsers()
        return result
    }
}