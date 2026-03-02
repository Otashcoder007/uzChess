import { IsOptional, IsString, Length } from 'class-validator';

export class BookCategoryUpdateDto {
  @IsOptional()
  @IsString()
  @Length(4, 64)
  title?: string;
}
