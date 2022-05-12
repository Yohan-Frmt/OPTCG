import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardErrataService } from './carderrata.service';
import { CardErrataDto } from './carderrata.dto';

@Controller('carderrata')
export class CardErrataController {
  constructor(private readonly service: CardErrataService) {}

  @Get()
  public async findAll(): Promise<CardErrataDto[]> {
    return await this.service.findAll();
  }

  @Post()
  public async create(@Body() card: CardErrataDto): Promise<CardErrataDto> {
    return await this.service.create(card);
  }
}
