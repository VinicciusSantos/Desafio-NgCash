import { CashOutUsecase } from './../../domain/use-cases/transactions/cash-out-usecase';
import { GetUserTransactionsUsecase } from './../../domain/use-cases/transactions/get-user-transactions-usecase';
import { Request, Response } from "express";

export class TransactionsController {
  public async list(req: Request, res: Response) {
    try {
      const data = await new GetUserTransactionsUsecase().execute(req.headers.authorization, req.query)
      return res.status(200).json({ message: `Successfully retrieved user's transactions`, data })
    } catch (err) {
      return res.status(400).json({
        message: 'Could not list transactions',
        error: err.message
      })
    }
  }

  public async cashOut(req: Request, res: Response) {
    try { 
      const data = await new CashOutUsecase().execute(req.headers.authorization, req.body.creditedUsername, req.body.value)
      return res.status(201).json({ message: `Transaction sucessfully done`, data })
    } catch (err) {
      return res.status(400).json({
        message: 'Could not do this transaction',
        error: err.message
      })
    }
  }
}
