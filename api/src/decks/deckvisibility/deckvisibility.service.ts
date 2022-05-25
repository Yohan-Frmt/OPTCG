import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeckVisibilityRepository } from './deckvisibility.repository';

@Injectable()
export class DeckVisibilityService {
  constructor(
    @InjectRepository(DeckVisibilityRepository)
    private repository: DeckVisibilityRepository,
  ) {}

  public async findAll() {
    return await this.repository.findAll();
  }
}
