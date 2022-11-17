import { Request, Response } from "express";
import { GetAllAccount } from './../../domain/use-cases/accounts/get-all-accounts';
import { CreateAccount } from '../../domain/use-cases/accounts/create-account';

export class AccountsController {
  public async getAllAccounts(_: Request, res: Response) {
    try {
      const Accounts = await new GetAllAccount().execute();
      res.send(Accounts);
    } catch (err) {
      res.status(500).send({ message: "Error fetching data", error: err });
    }
  }

  public async createAccount(req: Request, res: Response) {
    try {
      await new CreateAccount().execute(req.body);
      res.statusCode = 201;
      res.json({ message: "Created" });
    } catch (err) {
      res.status(500).send({ message: "Error saving data", error: err });
    }
  }
}
