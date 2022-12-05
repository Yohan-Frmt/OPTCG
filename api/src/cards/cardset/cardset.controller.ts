import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CardSetService } from "./cardset.service";
import { CardSetDto } from "./cardset.dto";
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Sets")
@Controller("cardsets")
export class CardSetController {
  constructor(private readonly service: CardSetService) {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved sets" })
  public async findAll(): Promise<CardSetDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CardSetDto })
  @ApiCreatedResponse({ description: "The record has been successfully created.", type: CardSetDto })
  @ApiForbiddenResponse({ description: "Forbidden." })
  public async create(@Body() card: CardSetDto): Promise<CardSetDto> {
    return await this.service.create(card);
  }
}
