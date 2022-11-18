import { ICryptService, IToken } from "../interfaces/services/crypt-interface";
import { sign, verify } from "jsonwebtoken";
import bcrypt from 'bcryptjs'

export class CryptService implements ICryptService {
  generateToken(user: Object): string {
    return sign(user, String(process.env.SECRET), {
      expiresIn: "24h",
    });
  }

  decodeToken(token: string): IToken | string {
    return verify(token, process.env.SECRET)
  }

  async hashPassword(password: string): Promise<string | any> {
      return bcrypt.hash(password, 10)
  }

  async compareHash(input: string, hashedInput: string): Promise<string | any>  {
    return bcrypt.compare(input, hashedInput)
  }
}
