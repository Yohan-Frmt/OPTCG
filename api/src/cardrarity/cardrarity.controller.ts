import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardRarityService } from './cardrarity.service';
import { CardRarityDto } from './cardrarity.dto';

@Controller('CardRarity')
export class CardRarityController {
  constructor(private readonly service: CardRarityService) {}

  @Get()
  findAll(): Promise<CardRarityDto[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() CardRarity: CardRarityDto): Promise<CardRarityDto> {
    return this.service.create(CardRarity);
  }
}
