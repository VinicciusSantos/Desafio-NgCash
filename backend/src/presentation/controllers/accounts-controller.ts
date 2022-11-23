import { GetUserUsecase } from './../../domain/use-cases/users/get-user-usecase';
import { GetUserTransactionsUsecase } from './../../domain/use-cases/transactions/get-user-transactions-usecase';
import { Request, Response } from "express";

export class AccountsController {
  public async getBalance(req: Request, res: Response) {
    try { 
      const user = await new GetUserUsecase().execute(req.headers.authorization)
      const transactions = await new GetUserTransactionsUsecase().execute(req.headers.authorization)
      return res.status(200).json({ message: "Successfully retrieved data", transactions, user })
     } catch (err) {
      return res.status(400).json({
        message: 'Could not get balance',
        error: err.message
      })
    }
  }
}
