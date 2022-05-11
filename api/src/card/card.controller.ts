import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardService } from './card.service';
import { CardDto } from './card.dto';

@Controller('card')
export class CardController {
  constructor(private readonly service: CardService) {}

  @Get()
  public async findAll(): Promise<CardDto[]> {
    return await this.service.findAll();
  }

  @Post()
  public async create(@Body() card: CardDto): Promise<CardDto> {
    return await this.service.create(card);
  }
}
