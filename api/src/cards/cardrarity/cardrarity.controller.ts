import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardRarityService } from './cardrarity.service';
import { CardRarityDto } from './cardrarity.dto';

@Controller('cardrarities')
export class CardRarityController {
  constructor(private readonly service: CardRarityService) {}

  @Get()
  public async findAll(): Promise<CardRarityDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(
    @Body() cardRarity: CardRarityDto,
  ): Promise<CardRarityDto> {
    return await this.service.create(cardRarity);
  }
}
