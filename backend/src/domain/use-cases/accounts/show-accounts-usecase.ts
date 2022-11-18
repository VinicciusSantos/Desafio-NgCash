import { AccountsDataRepository } from "../../../data/repositories/accounts-data-source";
import { IShowAccountUsecase } from "../../interfaces/use-cases/accounts/register-interface";

export class ShowAccountUsecase implements IShowAccountUsecase {
    AccountsDataRepository: typeof AccountsDataRepository
    constructor() {
        this.AccountsDataRepository = AccountsDataRepository
    }

    async execute(userId: number): Promise<any> {
        return;
    }
}