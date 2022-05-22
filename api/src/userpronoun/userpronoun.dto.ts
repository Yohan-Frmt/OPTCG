import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

export class UserPronounDto {
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

  // @IsOptional()
  // @IsArray()
  // @ArrayNotEmpty()
  // @ValidateNested({ each: true })
  // @Type(() => UserDto)
  // readonly users: UserDto[];
}
