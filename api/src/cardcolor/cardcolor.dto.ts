import { IsString } from 'class-validator';

export class CardColorDto {
  @IsString()
  fr_name: string;

  @IsString()
  en_name: string;
}
