import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserRegionService } from './userregion.service';
import { UserRegionDto } from './userregion.dto';

@Controller('userregion')
export class UserRegionController {
  constructor(private readonly service: UserRegionService) {}

  @Get()
  public async findAll(): Promise<UserRegionDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(
    @Body() userRegion: UserRegionDto,
  ): Promise<UserRegionDto> {
    return await this.service.create(userRegion);
  }
}
