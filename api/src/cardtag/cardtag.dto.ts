import { IsString } from 'class-validator';

export class CardTagDto {
  @IsString()
  fr_name: string;

  @IsString()
  en_name: string;
}
