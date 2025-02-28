import { forwardRef, Inject, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { CreateUserDto, CredentialsDto } from "../users/user/user.dto";
import { UserService } from "../users/user/user.service";
import { User } from "../users/user/user.entity";
import { TokenDto } from "./dto/token.dto";
import { PayloadDto } from "./dto/payload.dto";

@Injectable()
export class AuthenticationService {
  constructor(
    @Inject(forwardRef(() => UserService)) private readonly _user: UserService,
    private readonly _jwt: JwtService
  ) {
  }

  public async generateJsonWebToken(user: User): Promise<TokenDto> {
    const access: PayloadDto = {
      sub: user.id,
      email: user.email,
      type: "access",
      user
    };

    const refresh: PayloadDto = {
      sub: user.id,
      email: user.email,
      type: "refresh"
    };

    return {
      access_token: await this._jwt.signAsync(access, { expiresIn: "5s" }),
      refresh_token: await this._jwt.signAsync(refresh, { expiresIn: "7d" })
    };
  }

  public async refreshJsonWebToken(token: string): Promise<TokenDto> {
    let payload: PayloadDto;
    try {
      payload = this._jwt.verify(token);
    } catch (error) {
      throw new Error("Invalid refresh token");
    }
    if (payload.type !== "refresh") throw new Error("Wrong token type");
    console.log("suite");
    const user = await this._user.findById(payload.sub);
    if (!user) throw new Error("Invalid user");
    if (!user.isActive) throw new Error("Inactive user");
    console.log("suite suite");
    return await this.generateJsonWebToken(user);
  }

  public async validate(payload: any): Promise<TokenDto> {
    const user = await this._user.findByEmail(payload.email);
    if (user) return this.generateJsonWebToken(user);
    else throw new UnauthorizedException();
  }

  public async register(user: CreateUserDto): Promise<User> {
    if (await this._user.findByEmail(user.email))
      throw new Error("Email is already used");
    if (await this._user.findByUsername(user.username))
      throw new Error("Username is already used");
    return this._user.create(user);
  }

  public async login(credentials: CredentialsDto): Promise<TokenDto> {
    let user = await this._user.findByEmail(credentials.email);
    if (!user) throw new Error("Invalid username or password");
    const isValid = await this._user.compare(
      credentials.password,
      user.password
    );
    if (!isValid) throw new Error("Invalid username or password");
    console.table(user);
    if (!user.isActive) throw new Error("Inactive user");
    user = await this._user.findById(user.id);
    return await this.generateJsonWebToken(user);
  }
}
