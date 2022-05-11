import { IsString } from 'class-validator';

export class CardImageDto {
  @IsString()
  path: string;
}
