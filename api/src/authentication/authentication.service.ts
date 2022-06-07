import {
  forwardRef,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto, CredentialsDto } from '../users/user/user.dto';
import { UserService } from '../users/user/user.service';
import { User } from '../users/user/user.entity';
import { TokenDto } from './dto/token.dto';
import { PayloadDto } from './dto/payload.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(forwardRef(() => UserService)) private readonly _user: UserService,
    private readonly _jwt: JwtService,
  ) {}

  public generateJsonWebToken = async (user: User): Promise<TokenDto> => {
    const access: PayloadDto = {
      sub: () => user.id,
      email: user.email,
      type: 'access',
      user,
    };

    const refresh: PayloadDto = {
      sub: () => user.id,
      email: user.email,
      type: 'refresh',
    };

    const accessToken = await this._jwt.signAsync(access, { expiresIn: '1h' });
    const refreshToken = await this._jwt.signAsync(refresh, {
      expiresIn: '1h',
    });
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  };

  public refreshJsonWebToken = async (
    token: RefreshTokenDto,
  ): Promise<TokenDto> => {
    let payload: PayloadDto;
    try {
      payload = this._jwt.verify(token.refreshToken);
    } catch (error) {
      throw new Error('Invalid refresh token');
    }
    if (payload.type !== 'refresh') throw new Error('Wrong token type');
    const user = await this._user.findById(payload.sub());
    if (!user) throw new Error('Invalid user');
    if (!user.isActive) throw new Error('Inactive user');
    return await this.generateJsonWebToken(user);
  };

  public validate = async (payload: any): Promise<TokenDto> => {
    const user = await this._user.findByEmail(payload.email);
    if (user) return this.generateJsonWebToken(user);
    else throw new UnauthorizedException();
  };

  public register = async (user: CreateUserDto): Promise<User> =>
    this._user.create(user);

  public login = async (credentials: CredentialsDto): Promise<TokenDto> => {
    let user = await this._user.findByEmail(credentials.email);
    if (!user) throw new Error('Invalid username or password');
    const isValid = await this._user.compare(
      credentials.password,
      user.password,
    );
    if (!isValid) throw new Error('Invalid username or password');
    console.table(user);
    if (!user.isActive) throw new Error('Inactive user');
    user = await this._user.findById(user.id);
    return await this.generateJsonWebToken(user);
  };
}
