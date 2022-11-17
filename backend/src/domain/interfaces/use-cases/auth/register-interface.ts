import { RegisterRequestModel } from './../../../models/auth-model';

export interface IRegisterUsecase { 
    execute(user: RegisterRequestModel): Promise<any>; 
}