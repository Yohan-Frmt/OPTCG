import { IsString } from 'class-validator';

export class CardRarityDto {
  @IsString()
  fr_name: string;

  @IsString()
  en_name: string;
}
