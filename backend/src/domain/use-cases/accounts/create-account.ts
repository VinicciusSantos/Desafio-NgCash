import { AccountsRequestModel, AccountsResponseModel } from '../../models/account-model';
import { AccountsDataRepository } from '../../../data/interfaces/accounts-data-source';
import { AccountsRepository } from './../../interfaces/repositories/accounts-repository';
import { CreateAccountUseCase } from './../../interfaces/use-cases/accounts/create-account';

export class CreateAccount implements CreateAccountUseCase {
    private AccountsDataRepository: any
    constructor() {
        this.AccountsDataRepository = AccountsDataRepository
    }

    async execute(account: AccountsRequestModel): Promise<AccountsResponseModel> {
        console.log("#")
        return this.AccountsDataRepository.save(account);
    }
}