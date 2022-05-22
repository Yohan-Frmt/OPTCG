import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserPronounService } from './userpronoun.service';
import { UserPronounDto } from './userpronoun.dto';

@Controller('userpronoun')
export class UserPronounController {
  constructor(private readonly service: UserPronounService) {}

  @Get()
  public async findAll(): Promise<UserPronounDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(
    @Body() userPronoun: UserPronounDto,
  ): Promise<UserPronounDto> {
    return await this.service.create(userPronoun);
  }
}
