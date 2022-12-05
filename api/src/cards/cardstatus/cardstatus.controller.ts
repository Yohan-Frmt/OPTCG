import { Body, Controller, Get, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CardStatusService } from "./cardstatus.service";
import { CardStatusDto } from "./cardstatus.dto";
import { ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiOkResponse, ApiTags } from "@nestjs/swagger";

@ApiTags("Status")
@Controller("cardstatus")
export class CardStatusController {
  constructor(private readonly service: CardStatusService) {
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({ description: "Successfully retrieved status" })
  public async findAll(): Promise<CardStatusDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiBody({ type: CardStatusDto })
  @ApiCreatedResponse({ description: "The record has been successfully created.", type: CardStatusDto })
  @ApiForbiddenResponse({ description: "Forbidden." })
  public async create(
    @Body() CardStatus: CardStatusDto
  ): Promise<CardStatusDto> {
    return await this.service.create(CardStatus);
  }
}
