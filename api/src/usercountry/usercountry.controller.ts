import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UserCountryService } from './usercountry.service';
import { UserCountryDto } from './usercountry.dto';

@Controller('usercountry')
export class UserCountryController {
  constructor(private readonly service: UserCountryService) {}

  @Get()
  public async findAll(): Promise<UserCountryDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(
    @Body() userCountry: UserCountryDto,
  ): Promise<UserCountryDto> {
    return await this.service.create(userCountry);
  }
}
