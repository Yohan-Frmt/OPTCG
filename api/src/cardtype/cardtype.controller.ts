import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardTypeService } from './cardtype.service';
import { CardTypeDto } from './cardtype.dto';

@Controller('cardtype')
export class CardTypeController {
  constructor(private readonly service: CardTypeService) {}

  @Get()
  public async findAll(): Promise<CardTypeDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(@Body() cardType: CardTypeDto): Promise<CardTypeDto> {
    return await this.service.create(cardType);
  }
}
