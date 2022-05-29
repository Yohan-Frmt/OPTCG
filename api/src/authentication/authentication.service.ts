import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserDto } from '../users/user/user.dto';

@Injectable()
export class AuthenticationService {
  constructor(private readonly jwt: JwtService) {}

  public generateJwtToken = async (user: UserDto): Promise<string> =>
    this.jwt.signAsync({ user });

  public verifyJwtToken = async (token: string): Promise<any> =>
    this.jwt.verifyAsync(token);

  public hash = async (password: string): Promise<string> =>
    bcrypt.hash(password, 12);

  public compare = async (password: string, hash: string): Promise<boolean> =>
    bcrypt.compare(password, hash);
}
