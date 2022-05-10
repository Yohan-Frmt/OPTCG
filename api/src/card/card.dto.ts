import { IsNumber, IsString } from 'class-validator';

export class CardDto {
  // set: CardSet;

  @IsString()
  serial_number: string;

  // type: CardType;

  @IsString()
  fr_name: string;

  @IsString()
  en_name: string;

  @IsString()
  jp_name: string;

  @IsNumber()
  cost: number;

  @IsNumber()
  power: number;

  @IsNumber()
  life: number;

  // color: CardColor;

  @IsString()
  fr_effect: string;

  @IsString()
  en_effect: string;

  @IsNumber()
  counter: number;

  // rarity: CardRarity;

  // ban_status: BanStatus;
}
