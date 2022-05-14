import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardColorService } from './cardcolor.service';
import { CardColorDto } from './cardcolor.dto';

@Controller('cardcolor')
export class CardColorController {
  constructor(private readonly service: CardColorService) {}

  @Get()
  public async findAll(): Promise<CardColorDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(@Body() CardColor: CardColorDto): Promise<CardColorDto> {
    return await this.service.create(CardColor);
  }
}
