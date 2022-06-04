import { IsNotEmpty, IsString } from 'class-validator';

export class TokenDto {
  @IsString()
  @IsNotEmpty()
  readonly access_token: string;

  @IsString()
  @IsNotEmpty()
  readonly refresh_token: string;

  @IsString()
  @IsNotEmpty()
  readonly expires_in: string;
}
