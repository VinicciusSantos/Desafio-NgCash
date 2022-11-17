import { AccountsResponseModel } from '../../models/account-model';
import { AccountsDataRepository } from '../../../data/interfaces/accounts-data-source';
import { AccountsRepository } from './../../interfaces/repositories/accounts-repository';
import { GetAllAccountsUseCase } from './../../interfaces/use-cases/accounts/get-all-accounts';

export class GetAllAccount implements GetAllAccountsUseCase {
    AccountsDataRepository: any
    constructor() {
        this.AccountsDataRepository = AccountsDataRepository
    }

    async execute(): Promise<AccountsResponseModel[]> {
        console.log('teste')
        return this.AccountsDataRepository.find();
    }
}