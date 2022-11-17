import { Request, Response } from "express";

export class TransactionsController {
  public async list(_: Request, res: Response) {
    try { 
      return res.status(200)
    } catch (err) {
      return res.status(400).json({
        message: 'Could not list transactions',
        error: err.message
      })
    }
  }

  public async cashOut(req: Request, res: Response) {
    try { 
      return res.status(201)
    } catch (err) {
      return res.status(400).json({
        message: 'Could not do this transaction',
        error: err.message
      })
    }
  }
}
