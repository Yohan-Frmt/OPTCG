import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CardRarityService } from "./cardrarity.service";
import { CardRarityDto } from "./cardrarity.dto";
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Rarities")
@Controller("cardrarities")
export class CardRarityController {
  constructor(private readonly service: CardRarityService) {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved rarities" })
  public async findAll(): Promise<CardRarityDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CardRarityDto })
  @ApiCreatedResponse({ description: "The record has been successfully created.", type: CardRarityDto })
  @ApiForbiddenResponse({ description: "Forbidden." })
  public async create(
    @Body() cardRarity: CardRarityDto
  ): Promise<CardRarityDto> {
    return await this.service.create(cardRarity);
  }
}
