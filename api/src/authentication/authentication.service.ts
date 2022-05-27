import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthenticationService {
  public hash = async (password: string): Promise<string> =>
    bcrypt.hash(password, 10);

  public compare = async (password: string, hash: string): Promise<boolean> =>
    bcrypt.compare(password, hash);
}
