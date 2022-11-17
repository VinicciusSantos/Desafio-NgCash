import { LoginRequestModel, LoginResponseModel } from "../../../models/auth-model";

export interface ILoginUsecase {
    execute(input: LoginRequestModel): Promise<LoginResponseModel>;
}