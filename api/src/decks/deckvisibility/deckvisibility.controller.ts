import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from "@nestjs/common";
import { DeckVisibilityService } from "./deckvisibility.service";
import { DeckVisibilityDto } from "./deckvisibility.dto";

@Controller("deckvisibilities")
export class DeckVisibilityController {
  constructor(private readonly service: DeckVisibilityService) {
  }

  @Get()
  public async findAll(): Promise<DeckVisibilityDto[]> {
    return await this.service.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  public async create(
    @Body() visibility: DeckVisibilityDto
  ): Promise<DeckVisibilityDto> {
    return await this.service.create(visibility);
  }
}
