import { UserResponseModel } from "../../../models/users-model";

export interface IGetUserUsecase { 
    execute(userToken: string): Promise<UserResponseModel>
}