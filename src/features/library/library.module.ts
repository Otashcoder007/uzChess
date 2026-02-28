import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCategory } from './entities/book-category.entity';
import { Book } from './entities/book.entity';
import { BookLike } from './entities/book-like.entity';
import { BookReview } from './entities/book-review.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookCategory,
      Book,
      BookLike,
      BookReview,
    ]),
  ],
})
export class LibraryModule {}
