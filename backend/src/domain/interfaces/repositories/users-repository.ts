import { Users } from "../../entities/Users";

export interface UsersRepository {
    createUser(user: Users): Promise<boolean>;
    getUsers(): Promise<Users[]>
}
