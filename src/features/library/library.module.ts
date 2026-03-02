import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookCategory } from './entities/book-category.entity';
import { Book } from './entities/book.entity';
import { BookLike } from './entities/book-like.entity';
import { BookReview } from './entities/book-review.entity';
import { BookCategoriesController } from './controllers/book-categories.controller';
import { BookCategoryService } from './services/book-category.service';
import { BookService } from './services/book.service';
import { BookController } from './controllers/book.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      BookCategory,
      Book,
      BookLike,
      BookReview,
    ]),
  ],
  controllers: [BookCategoriesController, BookController],
  providers: [BookCategoryService, BookService],
})
export class LibraryModule {}
