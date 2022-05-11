import { IsString } from 'class-validator';

export class CardTypeDto {
  @IsString()
  fr_name: string;

  @IsString()
  en_name: string;
}
