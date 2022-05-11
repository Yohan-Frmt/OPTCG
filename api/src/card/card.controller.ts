import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { CardDto } from './card.dto';

@Controller('card')
export class CardController {
  constructor(private readonly service: CardService) {}

  @Get()
  findAll(): Promise<CardDto[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() card: CardDto): Promise<CardDto> {
    return this.service.create(card);
  }
}
