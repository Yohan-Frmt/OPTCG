import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardImageService } from './cardimage.service';
import { CardImageDto } from './cardimage.dto';

@Controller('cardimage')
export class CardImageController {
  constructor(private readonly service: CardImageService) {}

  @Get()
  public async findAll(): Promise<CardImageDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(@Body() card: CardImageDto): Promise<CardImageDto> {
    return await this.service.create(card);
  }
}
