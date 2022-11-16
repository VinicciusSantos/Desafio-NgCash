import { Users } from "../../../entities/Users";

export interface GetAllUsersUseCase { 
    execute(): Promise<Users[]>; 
}