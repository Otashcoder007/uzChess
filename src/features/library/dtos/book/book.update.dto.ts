import {
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';

export class BookUpdateDto {
  @IsOptional()
  @IsInt()
  authorId?: number;

  @IsOptional()
  @IsInt()
  categoryId?: number;

  @IsOptional()
  @IsInt()
  languageId?: number;

  @IsOptional()
  @IsInt()
  difficultyId?: number;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  @MaxLength(128)
  image?: string | null;

  @IsOptional()
  @IsString()
  price?: string;

  @IsOptional()
  @IsString()
  newPrice?: string | null;

  @IsOptional()
  @IsInt()
  pages?: number;

  @IsOptional()
  @IsString()
  pubDate?: string; // YYYY-MM-DD
}
