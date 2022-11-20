import { Request, Response } from "express";
import { LoginUsecase } from "../../domain/use-cases/auth/login-usecase";
import { RegisterUsecase } from "../../domain/use-cases/auth/register-usecase";

export class AuthController {
  public async register(req: Request, res: Response) {
    try {
      await new RegisterUsecase().execute(req.body)
      return res.status(201).json({message: "successfully created"})
    } catch (err) {
      return res.status(400).json({
        message: 'Could not register',
        error: err.message
      })
    }
  }

  public async login(req: Request, res: Response) {
    try {
      const data = await new LoginUsecase().execute(req.body)
      return res.status(200).json({message: "successfully logged in", data})
    } catch (err) {
      return res.status(400).json({
        message: 'Could not login',
        error: err.message
      })
    }
  }
}
