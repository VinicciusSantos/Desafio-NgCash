import { Request, Response } from "express";
import { CreateUserUseCase } from './../../domain/interfaces/use-cases/users/create-user';
import { GetAllUsersUseCase } from './../../domain/interfaces/use-cases/users/get-all-users';

export class UsersController {
  private getAllUsersUseCase: GetAllUsersUseCase;
  private createUsersUseCase: CreateUserUseCase;

  public async getAllUsers(req: Request, res: Response) {
    try {
      const Users = await this.getAllUsersUseCase.execute();
      res.send(Users);
    } catch (err) {
      res.status(500).send({ message: "Error fetching data" });
    }
  }

  public async createUser(req: Request, res: Response) {
    try {
      await this.createUsersUseCase.execute(req.body);
      res.statusCode = 201;
      res.json({ message: "Created" });
    } catch (err) {
      res.status(500).send({ message: "Error saving data" });
    }
  }
}
