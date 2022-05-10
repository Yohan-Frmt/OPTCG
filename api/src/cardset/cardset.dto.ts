import { IsString } from 'class-validator';

export class CardSetDto {
  @IsString()
  fr_name: string;

  @IsString()
  en_name: string;
}
