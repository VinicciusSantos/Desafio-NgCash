import { LoginRequestModel, LoginResponseModel } from './../../models/auth-model';
import { UsersDataRepository } from "../../../data/repositories/users-data-source";
import { ILoginUsecase } from "../../interfaces/use-cases/auth/login-interface";

export class LoginUsecase implements ILoginUsecase {
    UsersDataRepository: typeof UsersDataRepository
    constructor() {
        this.UsersDataRepository = UsersDataRepository
    }

    async execute(input: LoginRequestModel): Promise<LoginResponseModel> {
        return;
    }
}