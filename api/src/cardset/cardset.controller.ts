import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardSetService } from './cardset.service';
import { CardSetDto } from './cardset.dto';

@Controller('cardset')
export class CardSetController {
  constructor(private readonly service: CardSetService) {}

  @Get()
  findAll(): Promise<CardSetDto[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() card: CardSetDto): Promise<CardSetDto> {
    return this.service.create(card);
  }
}
