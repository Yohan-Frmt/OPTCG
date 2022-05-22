import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CardStatusDto } from './cardstatus.dto';
import { CardStatus } from './cardstatus.entity';

@Injectable()
export class CardStatusService {
  constructor(
    @InjectRepository(CardStatus)
    private readonly repository: Repository<CardStatus>,
  ) {}

  public async create(CardStatus: CardStatusDto): Promise<CardStatus> {
    const CardStatusCreated = await this.repository.create(CardStatus);
    return await this.repository.save(CardStatusCreated);
  }

  public async findAll(): Promise<CardStatus[]> {
    return await this.repository.find();
  }
}
