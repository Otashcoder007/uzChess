import { IsString, Length } from 'class-validator';

export class BookCategoryCreateDto {
  @IsString()
  @Length(4, 128)
  title: string;
}
