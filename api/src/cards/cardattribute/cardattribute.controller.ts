import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CardAttributeDto } from "./cardattribute.dto";
import { CardAttributeService } from "./cardattribute.service";
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Attributes")
@Controller("cardattributes")
export class CardAttributeController {
  constructor(private readonly service: CardAttributeService) {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved attributes" })
  public async findAll(): Promise<CardAttributeDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CardAttributeDto })
  @ApiCreatedResponse({ description: "The record has been successfully created.", type: CardAttributeDto })
  @ApiForbiddenResponse({ description: "Forbidden." })
  public async create(
    @Body() card: CardAttributeDto
  ): Promise<CardAttributeDto> {
    return await this.service.create(card);
  }
}
