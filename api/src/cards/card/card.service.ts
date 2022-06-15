import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { Repository } from 'typeorm';
import { CardDto } from './card.dto';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly repository: Repository<Card>,
  ) {}

  public async create(card: CardDto): Promise<Card> {
    const cardCreated = await this.repository.create(card);
    return await this.repository.save(cardCreated);
  }

  public async findAll(): Promise<Card[]> {
    return await this.repository.find({
      relations: [
        'set',
        'type',
        'colors',
        'tags',
        'images',
        'errata',
        'rarities',
        'status',
      ],
      cache: {
        id: 'cards',
        milliseconds: 3000,
      },
    });
  }
}
