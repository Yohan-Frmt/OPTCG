import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CardImageService } from "./cardimage.service";
import { CardImageDto } from "./cardimage.dto";
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Images")
@Controller("cardimages")
export class CardImageController {
  constructor(private readonly service: CardImageService) {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved images" })
  public async findAll(): Promise<CardImageDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CardImageDto })
  @ApiCreatedResponse({ description: "The record has been successfully created.", type: CardImageDto })
  @ApiForbiddenResponse({ description: "Forbidden." })
  public async create(@Body() card: CardImageDto): Promise<CardImageDto> {
    return await this.service.create(card);
  }
}
