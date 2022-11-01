import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Card } from "./card.entity";
import { Brackets, DataSource, Repository, SelectQueryBuilder } from "typeorm";
import { CardDto } from "./card.dto";

@Injectable()
export class CardService {
  async getAllPowers(): Promise<string[]> 
  { 
    return await this._dataSource
    .getRepository(Card)
    .createQueryBuilder("card")
    .select('card.power as en_name')
    .distinct(true)
    .orderBy('en_name')
    .getRawMany();
  }

  async getAllCosts(): Promise<string[]> {
    return await this._dataSource
    .getRepository(Card)
    .createQueryBuilder("card")
    .select('card.cost as en_name')
    .distinct(true)
    .orderBy('en_name')
    .getRawMany();  
  }
  
  constructor(
    @InjectRepository(Card) private readonly repository: Repository<Card>,
    private readonly _dataSource: DataSource
  ) {
  }

  public create = async (card: CardDto): Promise<Card> => {
    const cardCreated = await this.repository.create(card);
    return await this.repository.save(cardCreated);
  };

  public findAll = async (query?: any): Promise<Card[]> =>
    await this._dataSource
      .getRepository(Card)
      .createQueryBuilder("card")
      .leftJoinAndSelect("card.images", "images")
      .leftJoinAndSelect("card.set", "set")
      .leftJoinAndSelect("card.attribute", "attribute")
      .leftJoinAndSelect("card.type", "type")
      .leftJoinAndSelect("card.colors", "colors")
      .leftJoinAndSelect("card.tags", "tags")
      .leftJoinAndSelect("card.errata", "errata")
      .leftJoinAndSelect("card.rarities", "rarity")
      .leftJoinAndSelect("card.status", "status")
      .where((qb: SelectQueryBuilder<Card>) => {
        for (const items of query) {
          const [type, value] = items;
          if (!value) continue;
          switch (type) {
            case "attribute":
              qb.andWhere("attribute.en_name = :a", { a: value });
              break;
            case "rarities":
              qb.andWhere("rarity.en_name = :r", { r: value });
              break;
            case "sets":
              qb.andWhere("set.en_name = :s", { s: value });
              break;
            case "status":
              qb.andWhere("status.en_name = :st", { st: value });
              break;
            case "costs":
              qb.andWhere("card.cost = :c", {c: value});
              break;
            case "powers":
              qb.andWhere("card.power = :p", {p: value})
              break;
            case "types":
              if (value[0] === "!")
                qb.andWhere("type.en_name != :t", { t: value.substring(1) });
              else
                qb.andWhere(
                  new Brackets((web) => {
                    for (const [idx, type] of value.split(",").entries()) {
                      const params = {};
                      params[`c${idx}`] = type;
                      qb.leftJoinAndSelect(`card.type`, `type${idx}`);
                      web.orWhere(`type${idx}.en_name = :c${idx}`, params);
                    }
                  })
                );
              break;
            case "tags":
              for (const [idx, tag] of value.split(",").entries()) {
                const params = {};
                params[`t${idx}`] = tag;
                qb.leftJoinAndSelect(`card.tags`, `tags${idx}`).andWhere(
                  `tags${idx}.en_name = :t${idx}`,
                  params
                );
              }
              break;
            case "colors":
              qb.andWhere(
                new Brackets((web) => {
                  for (const [idx, color] of value.split(",").entries()) {
                    const params = {};
                    params[`c${idx}`] = color;
                    qb.leftJoinAndSelect(`card.colors`, `colors${idx}`);
                    web.orWhere(`colors${idx}.en_name = :c${idx}`, params);
                  }
                })
              );
              break;
            case "search":
              qb.andWhere("LOWER(card.en_name) LIKE LOWER(:c)", {
                c: `%${value}%`
              });
              break;
          }
        }
      })
      .orderBy("card.serial_number", "ASC")
      .getMany();

  public findOneBySerial = async (serial: string): Promise<Card> =>
    await this._dataSource
      .getRepository(Card)
      .createQueryBuilder("card")
      .leftJoinAndSelect("card.images", "images")
      .leftJoinAndSelect("card.set", "set")
      .leftJoinAndSelect("card.attribute", "attribute")
      .leftJoinAndSelect("card.type", "type")
      .leftJoinAndSelect("card.colors", "colors")
      .leftJoinAndSelect("card.tags", "tags")
      .leftJoinAndSelect("card.errata", "errata")
      .leftJoinAndSelect("card.rarities", "rarities")
      .leftJoinAndSelect("card.status", "status")
      .where({ serial_number: serial })
      .cache(`card-${serial}`, 86400000)
      .getOneOrFail();
}
