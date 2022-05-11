import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { CardDto } from './card.dto';
import { Card } from './card.entity';

@Controller('card')
export class CardController {
  constructor(private readonly service: CardService) {}

  @Get()
  findAll(): Promise<Card[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() card: CardDto): Promise<Card> {
    return this.service.create(card);
  }
}
