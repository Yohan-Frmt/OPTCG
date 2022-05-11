import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardImageService } from './cardimage.service';
import { CardImageDto } from './cardimage.dto';

@Controller('CardImage')
export class CardImageController {
  constructor(private readonly service: CardImageService) {}

  @Get()
  findAll(): Promise<CardImageDto[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() card: CardImageDto): Promise<CardImageDto> {
    return this.service.create(card);
  }
}
