import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CardDto } from './card.dto';

@Controller('cards')
export class CardController {
  constructor(private readonly service: CardService) {}

  @Get()
  public async findAll(): Promise<CardDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(@Body() card: CardDto): Promise<CardDto> {
    return await this.service.create(card);
  }
}
