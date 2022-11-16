import { AccountsRequestModel, AccountsResponseModel } from '../../models/account-model';
import { AccountsDataRepository } from '../../../data/interfaces/accounts-data-source';
import { AccountsRepository } from './../../interfaces/repositories/accounts-repository';
import { CreateAccountUseCase } from './../../interfaces/use-cases/accounts/create-account';

export class CreateAccount implements CreateAccountUseCase {
    AccountsDataRepository: AccountsRepository
    constructor(AccountsDataRepository: AccountsRepository) {
        this.AccountsDataRepository = AccountsDataRepository
    }

    async execute(account: AccountsRequestModel): Promise<AccountsResponseModel> {
        return AccountsDataRepository.save(account);
    }
}