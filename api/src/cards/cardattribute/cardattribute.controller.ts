import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CardAttributeDto } from './cardattribute.dto';
import { CardAttributeService } from './cardattribute.service';

@Controller('cardattributes')
export class CardAttributeController {
  constructor(private readonly service: CardAttributeService) {}

  @Get()
  public async findAll(): Promise<CardAttributeDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(
    @Body() card: CardAttributeDto,
  ): Promise<CardAttributeDto> {
    return await this.service.create(card);
  }
}
