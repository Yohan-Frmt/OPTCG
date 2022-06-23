import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Card } from './card.entity';
import { Repository, SelectQueryBuilder } from 'typeorm';
import { CardDto } from './card.dto';
import { dataSourceMain } from '../../datasource-config-default';

@Injectable()
export class CardService {
  constructor(
    @InjectRepository(Card) private readonly repository: Repository<Card>,
  ) {}

  public async create(card: CardDto): Promise<Card> {
    const cardCreated = await this.repository.create(card);
    return await this.repository.save(cardCreated);
  }

  public async findAll(query?: any): Promise<Card[]> {
    const wq = (qb: SelectQueryBuilder<Card>) => {
      for (const items of query) {
        const [type, value] = items;
        if (!value) continue;
        switch (type) {
          case 'rarities':
            qb.innerJoinAndSelect('card.rarities', 'rarity').andWhere(
              'rarity.en_name = :r',
              { r: value },
            );
            break;
          case 'sets':
            qb.innerJoinAndSelect('card.set', 'set').andWhere(
              'set.en_name = :s',
              { s: value },
            );
            break;
          case 'status':
            qb.innerJoinAndSelect('card.status', 'status').andWhere(
              'status.en_name = :st',
              { st: value },
            );
            break;
          case 'types':
            qb.innerJoinAndSelect('card.type', 'type').andWhere(
              'type.en_name = :t',
              { t: value },
            );
            break;
          case 'tags':
            for (const [idx, tag] of value.split(',').entries()) {
              const params = {};
              params[`t${idx}`] = tag;
              qb.innerJoinAndSelect(`card.tags`, `tags${idx}`).andWhere(
                `tags${idx}.en_name = :t${idx}`,
                params,
              );
            }
            break;
          case 'colors':
            for (const [idx, color] of value.split(',').entries()) {
              const params = {};
              params[`c${idx}`] = color;
              qb.innerJoinAndSelect(`card.colors`, `colors${idx}`).andWhere(
                `colors${idx}.en_name = :c${idx}`,
                params,
              );
            }
            break;
          case 'search':
            qb.andWhere('LOWER(card.en_name) LIKE LOWER(:c)', {
              c: `%${value}%`,
            });
            break;
        }
      }
    };
    return await dataSourceMain
      .getRepository(Card)
      .createQueryBuilder('card')
      .innerJoinAndSelect('card.images', 'images')
      .innerJoinAndSelect('card.errata', 'errata')
      .where(wq)
      .orderBy('card.serial_number', 'ASC')
      .getMany();
  }

  public async findOneBySerial(serial: string): Promise<Card> {
    return await dataSourceMain
      .getRepository(Card)
      .createQueryBuilder('card')
      .where({ serial_number: serial })
      .cache(`card-${serial}`, 86400000)
      .getOne();
  }
}
