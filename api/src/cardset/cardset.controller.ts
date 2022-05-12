import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardSetService } from './cardset.service';
import { CardSetDto } from './cardset.dto';

@Controller('cardset')
export class CardSetController {
  constructor(private readonly service: CardSetService) {}

  @Get()
  public async findAll(): Promise<CardSetDto[]> {
    return await this.service.findAll();
  }

  @Post()
  public async create(@Body() card: CardSetDto): Promise<CardSetDto> {
    return await this.service.create(card);
  }
}
