import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { DeckVisibilityRepository } from './deckvisibility.repository';
import { DeckVisibilityService } from './deckvisibility.service';

@Controller('deckvisibility')
export class DeckVisibilityController {
    constructor(private readonly service: DeckVisibilityService) {
        
    }

    @Get("/")
    findAll() {
        return this.service.findAll()
    }
}