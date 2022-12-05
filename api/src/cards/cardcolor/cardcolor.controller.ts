import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CardColorService } from "./cardcolor.service";
import { CardColorDto } from "./cardcolor.dto";
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Colors")
@Controller("cardcolors")
export class CardColorController {
  constructor(private readonly service: CardColorService) {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved colors" })
  public async findAll(): Promise<CardColorDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CardColorDto })
  @ApiCreatedResponse({ description: "The record has been successfully created.", type: CardColorDto })
  @ApiForbiddenResponse({ description: "Forbidden." })
  public async create(@Body() CardColor: CardColorDto): Promise<CardColorDto> {
    return await this.service.create(CardColor);
  }
}
