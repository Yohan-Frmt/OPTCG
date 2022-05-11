import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardTagService } from './cardtag.service';
import { CardTagDto } from './cardtag.dto';

@Controller('cardtag')
export class CardTagController {
  constructor(private readonly service: CardTagService) {}

  @Get()
  findAll(): Promise<CardTagDto[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() card: CardTagDto): Promise<CardTagDto> {
    return this.service.create(card);
  }
}
