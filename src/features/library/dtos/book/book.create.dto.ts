import {
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class BookCreateDto {
  @IsInt() authorId: number;
  @IsInt() categoryId: number;
  @IsInt() languageId: number;
  @IsInt() difficultyId: number;

  @IsString() @MaxLength(128) title: string;
  @IsString() description: string;

  @IsOptional() @IsString() @MaxLength(128) image?: string;

  @IsString() price: string;
  @IsOptional() @IsString() newPrice?: string;

  @IsInt() pages: number;
  @IsString() pubDate: string; // YYYY-MM-DD
}
