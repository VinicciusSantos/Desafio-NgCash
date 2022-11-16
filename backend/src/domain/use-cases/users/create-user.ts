import { UsersDataRepository } from '../../../data/interfaces/users-data-source';
import { Users } from '../../entities/Users';
import { UserRequestModel } from '../../models/users-model';
import { UsersRepository } from './../../interfaces/repositories/users-repository';
import { CreateUserUseCase } from './../../interfaces/use-cases/users/create-user';

export class CreateUser implements CreateUserUseCase {
    TransactionsDataRepository: UsersRepository
    constructor(TransactionsDataRepository: UsersRepository) {
        this.TransactionsDataRepository = TransactionsDataRepository
    }

    async execute(transaction: UserRequestModel): Promise<Users> {
        return UsersDataRepository.save(transaction);
    }
}