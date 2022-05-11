import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardTypeService } from './cardtype.service';
import { CardTypeDto } from './cardtype.dto';

@Controller('cardtype')
export class CardTypeController {
  constructor(private readonly service: CardTypeService) {}

  @Get()
  findAll(): Promise<CardTypeDto[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() cardType: CardTypeDto): Promise<CardTypeDto> {
    return this.service.create(cardType);
  }
}
