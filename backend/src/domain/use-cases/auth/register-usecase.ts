import { UserRequestModel, UserResponseModel } from './../../models/users-model';
import { Accounts } from './../../entities/Accounts';
import { AccountsDataRepository } from './../../../data/repositories/accounts-data-source';
import { RegisterRequestModel } from "./../../models/auth-model";
import { UsersDataRepository } from "../../../data/repositories/users-data-source";
import { IRegisterUsecase } from "../../interfaces/use-cases/auth/register-interface";
import { CryptService } from "../../services/crypt-service";
import { ICryptService } from "../../interfaces/services/crypt-interface";
import { Users } from '../../entities/Users';

export class RegisterUsecase implements IRegisterUsecase {
  private Users: typeof UsersDataRepository;
  private Accounts: typeof AccountsDataRepository;
  private CryptService: ICryptService

  constructor() {
    this.Users = UsersDataRepository;
    this.Accounts = AccountsDataRepository;
    this.CryptService = new CryptService
  }

  public async execute(user: UserRequestModel): Promise<any> {
    const userValidation = await this.validateInputsWithSucess(user)
    if(!userValidation.sucess) throw new Error(userValidation.message)

    user.password = await this.CryptService.hashPassword(user.password)
    let userResponse: UserResponseModel = await this.Users.save(user);

    userResponse = await this.createAndAssignAccountToNewUser(userResponse)
    return userResponse
  }

  private async validateInputsWithSucess(user: RegisterRequestModel): Promise<{ sucess: boolean, message?: string }> {
    try {
      await this.CheckUsername(user.username);
      this.CheckPassword(user.password);
      return { sucess: true }
    } catch (error) {
      return { sucess: false, message: error.message }
    }
  }

  private async CheckUsername(username: string) {
    if (username.length < 3)
      throw new Error("Username should have 3+ characters");
  }

  private CheckPassword(password: string) {
    const validateRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,14}$/;
    if (!validateRegex.test(password))
      throw new Error(
        "Password should have 8-14 characters (1+ uppercase, 1+ number)"
      );
  }

  private async createAndAssignAccountToNewUser(user: UserResponseModel): Promise<Accounts | any> {
    const newAccount = await this.Accounts.save({})
    this.Users.createQueryBuilder()
    .update(user)
    .set({ account: newAccount })
    .where("id = :id", { id: user.id })
    .execute()
  }
}
