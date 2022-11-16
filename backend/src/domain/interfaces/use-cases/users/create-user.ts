import { Users } from "../../../entities/Users";

export interface CreateUserUseCase {
    execute(User: Users): Promise<boolean>;
}