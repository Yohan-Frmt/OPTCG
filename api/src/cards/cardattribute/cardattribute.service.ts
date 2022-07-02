import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardAttribute } from './cardattribute.entity';
import { CardAttributeDto } from './cardattribute.dto';

@Injectable()
export class CardAttributeService {
  constructor(
    @InjectRepository(CardAttribute)
    private readonly repository: Repository<CardAttribute>,
  ) {}

  public async create(card: CardAttributeDto): Promise<CardAttribute> {
    const cardCreated = await this.repository.create(card);
    return await this.repository.save(cardCreated);
  }

  public async findAll(): Promise<CardAttribute[]> {
    return await this.repository.find();
  }
}
