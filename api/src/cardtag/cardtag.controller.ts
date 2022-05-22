import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardTagService } from './cardtag.service';
import { CardTagDto } from './cardtag.dto';

@Controller('cardtags')
export class CardTagController {
  constructor(private readonly service: CardTagService) {}

  @Get()
  public async findAll(): Promise<CardTagDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(@Body() card: CardTagDto): Promise<CardTagDto> {
    return await this.service.create(card);
  }
}
