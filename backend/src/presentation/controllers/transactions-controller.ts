import { Request, Response } from "express";

export class TransactionsController {
  public async list(_: Request, res: Response) {
    try { } catch (err) {
      return res.status(400).json({
        message: 'Could list transactions',
        error: err.message
      })
    }
  }

  public async cashOut(req: Request, res: Response) {
    try { } catch (err) {
      return res.status(400).json({
        message: 'Could do this transaction',
        error: err.message
      })
    }
  }
}
