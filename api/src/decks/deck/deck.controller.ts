import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DeckDto } from './deck.dto';
import { DeckService } from './deck.service';

@Controller()
export class DeckController {
  constructor(private readonly service: DeckService) {}

  @Get('/decks')
  public async findAll(): Promise<DeckDto[]> {
    return await this.service.findAll();
  }

  @Get('/deck/:id')
  public async findOneById(@Param('id') id: string): Promise<DeckDto> {
    return await this.service.findOneById(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(@Body() deck: DeckDto): Promise<DeckDto> {
    return await this.service.create(deck);
  }
}
