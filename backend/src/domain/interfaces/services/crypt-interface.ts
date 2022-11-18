import { JwtPayload } from 'jsonwebtoken';
import { Users } from "../../entities/Users";

export interface ICryptService {
  generateToken(user: Object): string;
  decodeToken(token: string): IToken | string;
  hashPassword(password: string): Promise<string | any>
  compareHash(input: string, hashedInput: string): Promise<string | any> 
}

export interface IToken extends JwtPayload {
    user?: Users
}
