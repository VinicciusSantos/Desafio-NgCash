import { Users } from './../../entities/Users';
import { TransactionsDataRepository } from "../../../data/repositories/transactions-data-source";
import { Transactions } from "../../entities/Transactions";
import {
  ICryptService,
  IToken,
} from "../../interfaces/services/crypt-interface";
import { CryptService } from "../../services/crypt-service";
import { IGetUserTransactionsUsecase, querieParams } from "./../../interfaces/use-cases/transactions/get-user-transactions-interface";

export class GetUserTransactionsUsecase implements IGetUserTransactionsUsecase {
  private Transactions: typeof TransactionsDataRepository;
  private CryptService: ICryptService;
  constructor() {
    this.Transactions = TransactionsDataRepository;
    this.CryptService = new CryptService();
  }

  async execute(userToken: string | undefined, queries: querieParams | any): Promise<any> {
    if (!userToken) throw new Error("Unauthorized");
    let decodedToken!: IToken | any;
    try {
      decodedToken = this.CryptService.decodeToken(userToken);
      let transactions = await this.getAllTransactions(decodedToken)

      if (queries.filter) {
        return String(queries.filter).toLowerCase() === 'cashin'
          ? transactions.cashIn
          : transactions.cashOut
      }
      
      return this.mergeAndSortTransactions(transactions)
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private async getAllTransactions(decodedToken: IToken) {
    const cashIn: Transactions[] = await this.getCashInTransactions(decodedToken.user);
    const cashOut: Transactions[] = await this.getCashOutTransactions(decodedToken.user);
    return { cashIn, cashOut }
  }

  private async getCashInTransactions(user: Users) {
    return this.Transactions.find({
      where: { creditedAccount: user },
      relations: { debitedAccount: true },
    });
  }

  private async getCashOutTransactions(user: Users) {
    return this.Transactions.find({
      relations: { creditedAccount: true },
      where: { debitedAccount: user },
    });
  }

  private mergeAndSortTransactions(transactions: { cashIn: Transactions[], cashOut: Transactions[] }): Transactions[] | any {
    const concatenedTransactions = transactions.cashIn.concat(transactions.cashOut)
    return concatenedTransactions.sort((a, b) => a.createdAt > b.createdAt ? 1 : 0)
  }
}
