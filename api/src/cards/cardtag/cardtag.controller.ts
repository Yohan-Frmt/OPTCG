import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CardTagService } from "./cardtag.service";
import { CardTagDto } from "./cardtag.dto";
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse } from "@nestjs/swagger";

@Controller("cardtags")
export class CardTagController {
  constructor(private readonly service: CardTagService) {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved tags" })
  public async findAll(): Promise<CardTagDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CardTagDto })
  @ApiCreatedResponse({ description: "The record has been successfully created.", type: CardTagDto })
  @ApiForbiddenResponse({ description: "Forbidden." })
  public async create(@Body() card: CardTagDto): Promise<CardTagDto> {
    return await this.service.create(card);
  }
}
