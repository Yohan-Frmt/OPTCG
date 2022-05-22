import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { get } from 'http';
import { DeckDto } from './deck.dto';
import { DeckRepository } from './deck.repository';
import { DeckService } from './deck.service';

@Controller('deck')
export class DeckController {
    constructor(private readonly service: DeckService) {
        
    }

    @Get()
    public async findAll(): Promise<DeckDto[]> {
        return await this.service.findAll()
    }

    @Post()
    @UsePipes(new ValidationPipe({transform: true}))
    public async create(@Body() deck: DeckDto ): Promise<DeckDto> {
        return await this.service.create(deck)
    }
}