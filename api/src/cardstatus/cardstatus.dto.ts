import { IsNumber, IsString } from 'class-validator';

export class CardStatusDto {
  @IsString()
  fr_name: string;

  @IsString()
  en_name: string;

  @IsNumber()
  max_amount: number;
}
