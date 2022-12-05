import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CardErrataService } from "./carderrata.service";
import { CardErrataDto } from "./carderrata.dto";
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Errata")
@Controller("carderrata")
export class CardErrataController {
  constructor(private readonly service: CardErrataService) {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved erratas" })
  public async findAll(): Promise<CardErrataDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CardErrataDto })
  @ApiCreatedResponse({ description: "The record has been successfully created.", type: CardErrataDto })
  @ApiForbiddenResponse({ description: "Forbidden." })
  public async create(@Body() card: CardErrataDto): Promise<CardErrataDto> {
    return await this.service.create(card);
  }
}
