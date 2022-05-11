import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardErrataService } from './carderrata.service';
import { CardErrataDto } from './carderrata.dto';

@Controller('carderrata')
export class CardErrataController {
  constructor(private readonly service: CardErrataService) {}

  @Get()
  findAll(): Promise<CardErrataDto[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() card: CardErrataDto): Promise<CardErrataDto> {
    return this.service.create(card);
  }
}
