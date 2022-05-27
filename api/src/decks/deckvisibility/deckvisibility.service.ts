import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeckVisibilityRepository } from './deckvisibility.repository';
import { DeckVisibility } from './deckvisibility.entity';

@Injectable()
export class DeckVisibilityService {
  constructor(
    @InjectRepository(DeckVisibility)
    private repository: DeckVisibilityRepository,
  ) {}

  public async findAll() {
    return await this.repository.find();
  }
}
