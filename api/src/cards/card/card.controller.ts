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
  UseInterceptors
} from "@nestjs/common";
import { CardService } from "./card.service";
import { CardDto } from "./card.dto";
import { TCardCodeAndCount } from "../../shared/encoder/types";
import { Card } from "./card.entity";
import { PaginationOptionsDto } from "../../shared/pagination/pagination-options.dto";
import { PaginationDto } from "../../shared/pagination/pagination.dto";
import { PaginationResponse } from "../../shared/decorator/pagination-response.decorator";
import {
  ApiBody,
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
  ApiUnprocessableEntityResponse
} from "@nestjs/swagger";


@Controller()
@ApiTags("Cards")
@UseInterceptors(ClassSerializerInterceptor)
export class CardController {
  constructor(private readonly service: CardService) {
  }

  @Get("/cards")
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved cards" })
  @PaginationResponse(CardDto)
  public async findAll(@Query() paginationOptions: PaginationOptionsDto): Promise<PaginationDto<CardDto>> {
    return await this.service.findAll(paginationOptions);
  }

  @Get("/card/:serial")
  @HttpCode(HttpStatus.OK)
  @ApiParam({ name: "serial", type: String })
  @ApiOkResponse({ description: "Successfully retrieved requested card" })
  @ApiUnprocessableEntityResponse({ description: "Could not find any entity of type Card matching you request" })
  public async findOneBySerial(
    @Param("serial") serial: string
  ): Promise<Card> {
    return await this.service.findOneBySerial(serial);
  }

  @Post("/card/:serial")
  @HttpCode(HttpStatus.OK)
  @ApiParam({ name: "serial", type: String })
  @ApiOkResponse({ description: "Successfully retrieved requested card" })
  @ApiUnprocessableEntityResponse({ description: "Could not find any entity of type Card matching you request" })
  public async findAssociatedCards(
    @Param("serial") serial: string
  ): Promise<TCardCodeAndCount[]> {
    return await this.service.findAssociatedCards(serial);
  }

  @Get("/cardcosts")
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved all costs" })
  public async getAllCosts(): Promise<string[]> {
    return await this.service.getAllCosts();
  }

  @Get("/cardpowers")
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved all powers" })
  public async getAllPowers(): Promise<string[]> {
    return await this.service.getAllPowers();
  }

  @Post("/card")
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CardDto })
  @ApiCreatedResponse({ description: "The record has been successfully created.", type: CardDto })
  @ApiForbiddenResponse({ description: "Forbidden." })
  public async create(@Body() card: CardDto): Promise<CardDto> {
    return await this.service.create(card);
  }
}
