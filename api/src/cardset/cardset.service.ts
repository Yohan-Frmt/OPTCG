import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardSet } from './cardset.entity';
import { CardSetDto } from './cardset.dto';

@Injectable()
export class CardSetService {
  constructor(
    @InjectRepository(CardSet) private readonly repository: Repository<CardSet>,
  ) {}

  public async create(card: CardSetDto): Promise<CardSet> {
    const cardCreated = await this.repository.save(card);
    return await this.repository.save(cardCreated);
  }

  public async findAll(): Promise<CardSet[]> {
    return await this.repository.find();
  }
}
