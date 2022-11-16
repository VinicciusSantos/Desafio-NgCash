import { Request, Response } from "express";
import { GetAllTransactionsUseCase } from './../../domain/interfaces/use-cases/transactions/get-all-transactions';
import { CreateTransactionUseCase } from './../../domain/interfaces/use-cases/transactions/create-transaction';

export class TransactionsController {
  private getAllTransactionsUseCase: GetAllTransactionsUseCase;
  private createTransactionsUseCase: CreateTransactionUseCase;

  public async getAllTransactions(req: Request, res: Response) {
    try {
      const Transactions = await this.getAllTransactionsUseCase.execute();
      res.send(Transactions);
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" });
    }
  }

  public async createTransaction(req: Request, res: Response) {
    try {
      await this.createTransactionsUseCase.execute(req.body);
      res.statusCode = 201;
      res.json({ message: "Created" });
    } catch (err) {
      res.status(500).send({ message: "Error saving data" });
    }
  }
}
