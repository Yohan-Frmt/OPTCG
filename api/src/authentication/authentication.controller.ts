import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  HttpException,
  HttpStatus,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { CreateUserDto, CredentialsDto, UserDto } from '../users/user/user.dto';
import { TokenDto } from './dto/token.dto';

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly _authentication: AuthenticationService) {}

  @Post('register')
  @UseInterceptors(ClassSerializerInterceptor)
  public async register(@Body() user: CreateUserDto): Promise<UserDto> {
    try {
      return await this._authentication.register(user);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Post('login')
  @UseInterceptors(ClassSerializerInterceptor)
  public async login(@Body() credentials: CredentialsDto): Promise<TokenDto> {
    try {
      return await this._authentication.login(credentials);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
  //
  // @Post('refresh-token')
  // public async refreshToken(@Body() token: RefreshTokenDto): Promise<TokenDto> {
  //   try {
  //     return this._authentication.refreshToken(token);
  //   } catch (error) {
  //     this._logger.warn('Refresh token attempt failed', token);
  //     throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  //   }
  // }
  //
  // @Post('forgot-password')
  // public async forgotPassword(
  //   @Body() forgotPassword: ForgotPasswordDto,
  // ): Promise<any> {
  //   try {
  //     return await this._authentication.forgotPassword(forgotPassword);
  //   } catch (error) {
  //     this._logger.warn('Forgot password failed.', forgotPassword);
  //     throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  //   }
  // }
}
