import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CardSet } from '../cardset/cardset.entity';

@Entity('card')
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CardSet, (cardset: CardSet) => cardset.cards)
  cardSet: CardSet;

  @Column()
  serial_number: string;

  // type: CardType;

  @Column()
  fr_name: string;

  @Column()
  en_name: string;

  @Column()
  jp_name: string;

  @Column()
  cost: number;

  @Column()
  power: number;

  @Column()
  life: number;

  // color: CardColor;

  @Column()
  fr_effect: string;

  @Column()
  en_effect: string;

  @Column()
  counter: number;

  // rarity: CardRarity;

  // ban_status: BanStatus;
}
