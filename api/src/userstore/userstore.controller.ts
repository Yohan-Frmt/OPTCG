import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserStoreService } from './userstore.service';
import { UserStoreDto } from './userstore.dto';

@Controller('userstore')
export class UserStoreController {
  constructor(private readonly service: UserStoreService) {}

  @Get()
  public async findAll(): Promise<UserStoreDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(@Body() userStore: UserStoreDto): Promise<UserStoreDto> {
    return await this.service.create(userStore);
  }
}
