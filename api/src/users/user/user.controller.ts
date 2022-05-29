import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import {
  CreateUserRequestDto,
  LoginUserRequestDto,
  LoginUserResponseDto,
  UserDto,
} from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async findAll(): Promise<UserDto[]> {
    return await this.userService.findAll();
  }

  @Post('register')
  public async create(@Body() user: CreateUserRequestDto): Promise<UserDto> {
    return await this.userService.create(user);
  }

  @Post('login')
  async login(
    @Body() userRequestDto: LoginUserRequestDto,
  ): Promise<LoginUserResponseDto> {
    const jwt: string = await this.userService.login(userRequestDto);
    return {
      access_token: jwt,
      expires_in: 1000,
    };
  }
}
