import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardColorService } from './cardcolor.service';
import { CardColorDto } from './cardcolor.dto';

@Controller('cardcolor')
export class CardColorController {
  constructor(private readonly service: CardColorService) {}

  @Get()
  findAll(): Promise<CardColorDto[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() CardColor: CardColorDto): Promise<CardColorDto> {
    return this.service.create(CardColor);
  }
}
