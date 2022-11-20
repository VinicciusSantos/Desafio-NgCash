import { Users } from './../../entities/Users';
import { UsersDataRepository } from "../../../data/repositories/users-data-source";
import { ILoginUsecase } from "../../interfaces/use-cases/auth/login-interface";
import { CryptService } from '../../services/crypt-service';
import { ICryptService } from '../../interfaces/services/crypt-interface';
import {
  LoginRequestModel,
  LoginResponseModel,
} from "./../../models/auth-model";

export class LoginUsecase implements ILoginUsecase {
  private UsersDataRepository: typeof UsersDataRepository;
  private CryptService: ICryptService

  constructor() {
    this.UsersDataRepository = UsersDataRepository;
    this.CryptService = new CryptService
  }

  async execute(input: LoginRequestModel): Promise<LoginResponseModel | string> {
    const user = await this.findUser(input.username);
    if (!user) throw new Error('Wrong Credentials')

    const isValidPassword = await this.CryptService.compareHash(input.password, user.password)
    if (!isValidPassword) throw new Error('Wrong Credentials')
    
    return this.CryptService.generateToken({user})
  }

  private async findUser(username: string): Promise<Users> {
    return this.UsersDataRepository.findOneBy({
        username
  })};
}
