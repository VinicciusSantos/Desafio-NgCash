import { IToken } from './../../interfaces/services/crypt-interface';
import { AccountsDataRepository } from "../../../data/repositories/accounts-data-source";
import { ICryptService } from "../../interfaces/services/crypt-interface";
import { IGetBalanceUsecase } from "../../interfaces/use-cases/accounts/get-balance-interface";
import { CryptService } from "../../services/crypt-service";

export class GetBalanceUsecase implements IGetBalanceUsecase {
    private Accounts: typeof AccountsDataRepository
    private CryptService: ICryptService
    constructor() {
        this.Accounts = AccountsDataRepository
        this.CryptService = new CryptService
    }

    async execute(userToken: string | undefined): Promise<any> {
        if (!userToken) throw new Error("Unauthorized")
        let decodedToken!: IToken | any;
        try {
            decodedToken = this.CryptService.decodeToken(userToken)
            return this.Accounts.findOneBy({ id: decodedToken.user.account })
        } catch (error) {
            throw new Error(error.message)
        }
    }
}