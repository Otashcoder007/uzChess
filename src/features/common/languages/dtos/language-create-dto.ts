import { IsString, MaxLength } from 'class-validator';

export class LanguageCreateDto {
  @IsString()
  @MaxLength(32)
  title: string;

  @IsString()
  @MaxLength(2)
  code: string;
}
