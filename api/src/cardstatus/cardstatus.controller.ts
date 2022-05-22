import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardStatusService } from './cardstatus.service';
import { CardStatusDto } from './cardstatus.dto';

@Controller('cardstatus')
export class CardStatusController {
  constructor(private readonly service: CardStatusService) {}

  @Get()
  public async findAll(): Promise<CardStatusDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(
    @Body() CardStatus: CardStatusDto,
  ): Promise<CardStatusDto> {
    return await this.service.create(CardStatus);
  }
}
