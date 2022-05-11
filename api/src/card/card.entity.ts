import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CardSet } from '../cardset/cardset.entity';
import { CardType } from '../cardtype/cardtype.entity';
import { CardColor } from '../cardcolor/cardcolor.entity';

@Entity('card')
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CardSet, (set: CardSet) => set.cards)
  set: CardSet;

  @Column()
  serial_number: string;

  @ManyToOne(() => CardType, (type: CardType) => type.cards)
  type: CardType;

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

  @ManyToMany(() => CardColor, (color: CardColor) => color.cards)
  @JoinTable()
  color: CardColor;

  @Column()
  fr_effect: string;

  @Column()
  en_effect: string;

  @Column()
  counter: number;

  // rarity: CardRarity;

  // ban_status: BanStatus;
}
