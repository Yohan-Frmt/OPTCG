import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async findAll(): Promise<UserDto[]> {
    return await this.userService.findAll();
  }

  @Get('protected')
  public async protected() {
    return {
      title: 'This is protected',
    };
  }
}
