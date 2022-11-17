import { Request, Response } from "express";

export class AccountsController {
  public async getBalance(_: Request, res: Response) {
    try { 
      return res.status(200)
     } catch (err) {
      return res.status(400).json({
        message: 'Could not get balance',
        error: err.message
      })
    }
  }
}
