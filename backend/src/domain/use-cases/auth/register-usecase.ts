import { RegisterRequestModel } from './../../models/auth-model';
import { UsersDataRepository } from "../../../data/repositories/users-data-source";
import { IRegisterUsecase } from "../../interfaces/use-cases/auth/register-interface";

export class RegisterUsecase implements IRegisterUsecase {
    UsersDataRepository: typeof UsersDataRepository
    constructor() {
        this.UsersDataRepository = UsersDataRepository
    }

    async execute(user: RegisterRequestModel): Promise<any> {
        return UsersDataRepository.save(user);
    }
}