import { IsString } from 'class-validator';

export class BookCategoryListDto {
  @IsString()
  title: string;
}
