import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CardSet } from '../cardset/cardset.entity';
import { CardType } from '../cardtype/cardtype.entity';
import { CardColor } from '../cardcolor/cardcolor.entity';
import { CardStatus } from '../cardstatus/cardstatus.entity';
import { CardTag } from '../cardtag/cardtag.entity';
import { CardImage } from '../cardimage/cardimage.entity';
import { CardRarity } from '../cardrarity/cardrarity.entity';
import { CardErrata } from '../carderrata/carderrata.entity';

@Entity('card')
export class Card extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  serial_number: string;

  @Column()
  fr_name: string;

  @Column()
  en_name: string;

  @Column()
  jp_name: string;

  @Column({ nullable: true })
  cost?: number;

  @Column({ nullable: true })
  power?: number;

  @Column({ nullable: true })
  life?: number;

  @Column({ nullable: true })
  fr_effect?: string;

  @Column({ nullable: true })
  en_effect?: string;

  @Column({ nullable: true })
  counter?: number;

  @ManyToOne(() => CardSet, (set: CardSet) => set.cards)
  set: CardSet;

  @ManyToOne(() => CardType, (type: CardType) => type.cards)
  type: CardType;

  @ManyToMany(() => CardColor, (color: CardColor) => color.cards)
  @JoinTable()
  colors: CardColor[];

  @ManyToMany(() => CardTag, (tag: CardTag) => tag.cards)
  @JoinTable()
  tags: CardTag[];

  @OneToMany(() => CardImage, (image: CardImage) => image.card)
  images: CardImage[];

  @OneToMany(() => CardErrata, (errata: CardErrata) => errata.card)
  errata?: CardErrata[];

  @ManyToMany(() => CardRarity, (rarity: CardRarity) => rarity.cards)
  @JoinTable()
  rarities: CardRarity[];

  @ManyToOne(() => CardStatus, (status: CardStatus) => status.cards)
  status: CardStatus;
}
