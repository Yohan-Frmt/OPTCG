import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import { CardSet } from "../cardset/cardset.entity";
import { CardType } from "../cardtype/cardtype.entity";
import { CardColor } from "../cardcolor/cardcolor.entity";
import { CardStatus } from "../cardstatus/cardstatus.entity";
import { CardTag } from "../cardtag/cardtag.entity";
import { CardImage } from "../cardimage/cardimage.entity";
import { CardRarity } from "../cardrarity/cardrarity.entity";
import { CardErrata } from "../carderrata/carderrata.entity";
import { CardAttribute } from "../cardattribute/cardattribute.entity";

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
  prev?: string;

  @Column({ nullable: true })
  next?: string;

  @Column({ nullable: true })
  fr_effect?: string;

  @Column({ nullable: true })
  en_effect?: string;

  @Column({ nullable: true })
  fr_trigger_effect?: string;

  @Column({ nullable: true })
  en_trigger_effect?: string;

  @Column({ nullable: true })
  counter?: number;

  @OneToOne(() => CardAttribute, (attribute: CardAttribute) => attribute.card, {
    cascade: true,
  })
  @JoinColumn()
  attribute: CardAttribute;

  @ManyToOne(() => CardSet, (set: CardSet) => set.cards, {
    cascade: true,
  })
  set: CardSet;

  @ManyToOne(() => CardType, (type: CardType) => type.cards, {
    cascade: true,
  })
  type: CardType;

  @ManyToMany(() => CardColor, (color: CardColor) => color.cards, {
    cascade: true,
  })
  @JoinTable()
  colors: CardColor[];

  @ManyToMany(() => CardTag, (tag: CardTag) => tag.cards, {
    cascade: true,
  })
  @JoinTable()
  tags: CardTag[];

  @OneToMany(() => CardImage, (image: CardImage) => image.card, {
    cascade: true,
  })
  images: CardImage[];

  @OneToMany(() => CardErrata, (errata: CardErrata) => errata.card, {
    cascade: true,
  })
  errata?: CardErrata[];

  @ManyToMany(() => CardRarity, (rarity: CardRarity) => rarity.cards, {
    cascade: true,
  })
  @JoinTable()
  rarities: CardRarity[];

  @ManyToOne(() => CardStatus, (status: CardStatus) => status.cards, {
    cascade: true,
  })
  status: CardStatus;
}
