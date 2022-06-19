import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardService } from './card.service';
import { CardDto } from './card.dto';
import { Request } from 'express';

@Controller()
export class CardController {
  constructor(private readonly service: CardService) {}

  @Get('/cards')
  public async findAll(@Req() request: Request): Promise<CardDto[]> {
    return await this.service.findAll(Object.entries(request.query));
  }

  @Get('/card/:serial')
  public async findOneBySerial(
    @Param('serial') serial: string,
  ): Promise<CardDto> {
    return await this.service.findOneBySerial(serial);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(@Body() card: CardDto): Promise<CardDto> {
    return await this.service.create(card);
  }
}
