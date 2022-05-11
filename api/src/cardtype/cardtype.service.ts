import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CardType } from './cardtype.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CardTypeDto } from './cardtype.dto';

@Injectable()
export class CardTypeService {
  constructor(
    @InjectRepository(CardType)
    private readonly repository: Repository<CardType>,
  ) {}

  public async create(cardType: CardTypeDto): Promise<CardType> {
    const cardTypeCreated = await this.repository.save(cardType);
    return await this.repository.save(cardTypeCreated);
  }

  public async findAll(): Promise<CardType[]> {
    return await this.repository.find();
  }
}
