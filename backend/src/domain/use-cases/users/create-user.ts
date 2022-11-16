import { CreateUserUseCase } from './../../interfaces/use-cases/users/create-user';
import { Users } from "../../entities/Users";
import { UsersRepository } from "../../interfaces/repositories/users-repository";


export class CreateUser implements CreateUserUseCase {
   usersRepository: UsersRepository
    constructor(usersRepository: UsersRepository) {
        this.usersRepository = usersRepository
    }

    async execute(user: Users): Promise<boolean> {
        const result = await this.usersRepository.createUser(user)
        return result
    }
}