import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CardErrata } from './carderrata.entity';
import { CardErrataDto } from './carderrata.dto';

@Injectable()
export class CardErrataService {
  constructor(
    @InjectRepository(CardErrata)
    private readonly repository: Repository<CardErrata>,
  ) {}

  public async create(CardErrata: CardErrataDto): Promise<CardErrata> {
    const CardErrataCreated = await this.repository.save(CardErrata);
    return await this.repository.save(CardErrataCreated);
  }

  public async findAll(): Promise<CardErrata[]> {
    return await this.repository.find();
  }
}
