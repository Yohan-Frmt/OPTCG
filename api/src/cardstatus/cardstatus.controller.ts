import { Body, Controller, Get, Post } from '@nestjs/common';
import { CardStatusService } from './cardstatus.service';
import { CardStatusDto } from './cardstatus.dto';

@Controller('cardstatus')
export class CardStatusController {
  constructor(private readonly service: CardStatusService) {}

  @Get()
  findAll(): Promise<CardStatusDto[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() CardStatus: CardStatusDto): Promise<CardStatusDto> {
    return this.service.create(CardStatus);
  }
}
