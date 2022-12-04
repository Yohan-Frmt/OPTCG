import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Query,
  Req,
  UseInterceptors
} from "@nestjs/common";
import { CardService } from "./card.service";
import { CardDto } from "./card.dto";
import { Request } from "express";
import { TCardCodeAndCount } from "../../shared/encoder/types";
import { Card } from "./card.entity";
import { PaginationOptionsDto } from "../../shared/pagination/pagination-options.dto";
import { PaginationDto } from "../../shared/pagination/pagination.dto";
import { PaginationResponse } from "../../shared/decorator/pagination-response.decorator";
import { ApiTags } from "@nestjs/swagger";

@Controller()
@ApiTags("Cards")
@UseInterceptors(ClassSerializerInterceptor)
export class CardController {
  constructor(private readonly service: CardService) {
  }

  @Get("/cards")
  @HttpCode(HttpStatus.OK)
  @PaginationResponse(CardDto)
  public async findAll(@Query() paginationOptions: PaginationOptionsDto, @Req() request: Request): Promise<PaginationDto<CardDto>> {
    return await this.service.findAll(paginationOptions, Object.entries(request.query));
  }

  @Get("/card/:serial")
  @HttpCode(HttpStatus.OK)
  public async findOneBySerial(
    @Param("serial") serial: string
  ): Promise<Card> {
    return await this.service.findOneBySerial(serial);
  }

  @Post("/card/:serial")
  @HttpCode(HttpStatus.OK)
  public async findAssociatedCards(
    @Param("serial") serial: string
  ): Promise<TCardCodeAndCount[]> {
    return await this.service.findAssociatedCards(serial);
  }

  @Get("/cardcosts")
  @HttpCode(HttpStatus.OK)
  public async getAllCosts(): Promise<string[]> {
    return await this.service.getAllCosts();
  }

  @Get("/cardpowers")
  @HttpCode(HttpStatus.OK)
  public async getAllPowers(): Promise<string[]> {
    return await this.service.getAllPowers();
  }

  @Post()
  public async create(@Body() card: CardDto): Promise<CardDto> {
    return await this.service.create(card);
  }
}
