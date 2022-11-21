import { GetBalanceUsecase } from './../../domain/use-cases/accounts/get-balance-usecase';
import { Request, Response } from "express";

export class AccountsController {
  public async getBalance(req: Request, res: Response) {
    try { 
      const user = await new GetBalanceUsecase().execute(req.headers.authorization)
      return res.status(200).json({ message: "Successfully retrieved data", user})
     } catch (err) {
      return res.status(400).json({
        message: 'Could not get balance',
        error: err.message
      })
    }
  }
}
