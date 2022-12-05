import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CardTypeService } from "./cardtype.service";
import { CardTypeDto } from "./cardtype.dto";
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Types")
@Controller("cardtypes")
export class CardTypeController {
  constructor(private readonly service: CardTypeService) {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved types" })
  public async findAll(): Promise<CardTypeDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CardTypeDto })
  @ApiCreatedResponse({ description: "The record has been successfully created.", type: CardTypeDto })
  @ApiForbiddenResponse({ description: "Forbidden." })
  public async create(@Body() cardType: CardTypeDto): Promise<CardTypeDto> {
    return await this.service.create(cardType);
  }
}
