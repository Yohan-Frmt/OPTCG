import { Controller, Get } from '@nestjs/common';
import { get } from 'http';
import { DeckRepository } from './deck.repository';
import { DeckService } from './deck.service';

@Controller('deck')
export class DeckController {
    constructor(private readonly service: DeckService) {
        
    }

    @Get("/")
    findAll() {
        return this.service.findAll()
    }
}