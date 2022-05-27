import { Controller, Get } from '@nestjs/common';
import { DeckVisibilityService } from './deckvisibility.service';

@Controller('deckvisibilities')
export class DeckVisibilityController {
  constructor(private readonly service: DeckVisibilityService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
