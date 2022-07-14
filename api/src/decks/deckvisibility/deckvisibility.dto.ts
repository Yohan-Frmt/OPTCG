import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class DeckVisibilityDto {
  @IsUUID()
  @IsString()
  @IsOptional()
  readonly id?: string;

  @IsString()
  @IsNotEmpty()
  readonly fr_name: string;

  @IsString()
  @IsNotEmpty()
  readonly en_name: string;
}
