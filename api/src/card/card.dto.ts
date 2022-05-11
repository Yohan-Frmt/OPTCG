import { IsNumber, IsString } from 'class-validator';
import { CardSetDto } from '../cardset/cardset.dto';
import { CardTypeDto } from '../cardtype/cardtype.dto';
import { CardColorDto } from '../cardcolor/cardcolor.dto';

export class CardDto {
  cardSet: CardSetDto;

  @IsString()
  serial_number: string;

  type: CardTypeDto;

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

  color: CardColorDto;

  @IsString()
  fr_effect: string;

  @IsString()
  en_effect: string;

  @IsNumber()
  counter: number;

  // rarity: CardRarity;

  // ban_status: BanStatus;
}
