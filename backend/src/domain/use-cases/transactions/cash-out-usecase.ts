import { Accounts } from './../../entities/Accounts';
import { ICashOutUsecase } from './../../interfaces/use-cases/transactions/cash-out-interface';
import { TransactionsDataRepository } from '../../../data/repositories/transactions-data-source';
import { ICryptService, IToken } from '../../interfaces/services/crypt-interface';
import { CryptService } from '../../services/crypt-service';
import { UsersDataRepository } from '../../../data/repositories/users-data-source';
import { Users } from '../../entities/Users';
import { AccountsDataRepository } from '../../../data/repositories/accounts-data-source';

export class CahsOutUsecase implements ICashOutUsecase {
    private Transactions: typeof TransactionsDataRepository
    private CryptService: ICryptService
    private Users: typeof UsersDataRepository;
    private Accounts: typeof AccountsDataRepository

    constructor() {
        this.Transactions = TransactionsDataRepository
        this.Users = UsersDataRepository
        this.Accounts = AccountsDataRepository
        this.CryptService = new CryptService
    }

    async execute(userToken: string | undefined, creditedUsername: any, value: number): Promise<any> {
        if (!userToken) throw new Error("Unauthorized")
        let decodedToken!: IToken | any;
        try {
            decodedToken = this.CryptService.decodeToken(userToken)
            let creditedUser = await this.getUserByUsername(creditedUsername)   

            this.checkIfUserIsSelfCashing(decodedToken.user, creditedUser)
            await this.checkIfUserHaveEnougtMoney(decodedToken.user, value)

            const transaction = this.Transactions.save({ 
                debitedAccount: decodedToken.user, 
                creditedAccount: creditedUser,
                value
            })

            await this.updateUsersBalance(decodedToken.user, creditedUser, value)
            return transaction
        } catch (error) {
            throw new Error(error.message)
        }
    }

    private async getUserAccount(userId: number): Promise<Accounts> {
        const user: any = await this.Users.findOne({
            loadRelationIds: true,
            where: { id: userId }
        })
        return this.Accounts.findOneBy({ id: user.account })
    }

    private async getUserByUsername(username: string): Promise<Users> {
        const user = await this.Users.findOneBy({ username })
        if (!user) throw new Error(`User doesn't exists`)
        return user
    }

    private checkIfUserIsSelfCashing(debitedUser: Users, creditedUser: Users) {
        if (debitedUser.id === creditedUser.id) throw new Error("You cannot transfer to yourself")
    }

    private async checkIfUserHaveEnougtMoney(user: Users, value: number): Promise<boolean | null> {
        const userAccount = await this.getUserAccount(user.id)
        const userHasEnoughtMoney = userAccount.balance >= value
        if (!userHasEnoughtMoney) throw new Error(`User doesn't Have Enough Money`)
        return userHasEnoughtMoney
    }

    private async updateUsersBalance(debitedUser: Users, CreditedUser: Users, value: number) {
        const debitedAccount = await this.updateDebitedUserBalace(debitedUser.id, value)
        const creditedAccount = await this.updateCreditedUserBalace(CreditedUser.id, value)
        console.log("🚀 ~ file: cash-out-usecase.ts ~ line 66 ~ CahsOutUsecase ~ updateUsersBalance ~ debitedAccount", debitedAccount)
        console.log("🚀 ~ file: cash-out-usecase.ts ~ line 68 ~ CahsOutUsecase ~ updateUsersBalance ~ creditedAccount", creditedAccount)
    }

    private async updateDebitedUserBalace(debitedUserId: number, value: number) {  
        const accountFromDebitedUser = await this.getUserAccount(debitedUserId)
        return this.Accounts
                    .createQueryBuilder()
                    .update(accountFromDebitedUser)
                    .set({ balance: (Number(accountFromDebitedUser.balance) - Number(value) )})
                    .where("id = :id", { id: debitedUserId })
                    .execute()
    }

    private async updateCreditedUserBalace(creditedUserId: number, value: number) {  
        const accountFromCreditedUser = await this.getUserAccount(creditedUserId)
        return this.Accounts
                    .createQueryBuilder()
                    .update(accountFromCreditedUser)
                    .set({ balance: (Number(accountFromCreditedUser.balance) + Number(value) )})
                    .where("id = :id", { id: creditedUserId })
                    .execute()
    }
}