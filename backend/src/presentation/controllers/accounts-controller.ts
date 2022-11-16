import { Request, Response } from "express";
import { CreateAccountUseCase } from "../../domain/interfaces/use-cases/accounts/create-account";
import { GetAllAccountsUseCase } from "../../domain/interfaces/use-cases/accounts/get-all-accounts";

export class AccountsController {
  private getAllAccountsUseCase: GetAllAccountsUseCase;
  private createAccountUseCase: CreateAccountUseCase;

  public async getAllAccounts(req: Request, res: Response) {
    try {
      const Accounts = await this.getAllAccountsUseCase.execute();
      res.send(Accounts);
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" });
    }
  }

  public async createAccount(req: Request, res: Response) {
    try {
      await this.createAccountUseCase.execute(req.body);
      res.statusCode = 201;
      res.json({ message: "Created" });
    } catch (err) {
      res.status(500).send({ message: "Error saving data" });
    }
  }
}
