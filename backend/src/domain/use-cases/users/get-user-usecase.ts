import { IGetUserUsecase } from './../../interfaces/use-cases/users/get-user-interface';
import { UsersDataRepository } from "../../../data/repositories/users-data-source";
import { CryptService } from "../../services/crypt-service";
import { ICryptService } from "../../interfaces/services/crypt-interface";

export class GetUserUsecase implements IGetUserUsecase {
  private Users: typeof UsersDataRepository;
  private CryptService: ICryptService

  constructor() {
    this.Users = UsersDataRepository;
    this.CryptService = new CryptService
  }

  public async execute(userToken: string): Promise<any> {
    const user = this.CryptService.decodeToken(userToken)['user']
    return this.Users.findOne({
      where: { id: user.id },
      relations: ['account']
    })
  }
}
