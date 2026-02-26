import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Author } from '../../common/authors/entities/author.entity';
import { BookCategory } from './book-category.entity';
import { Language } from '../../common/languages/entities/languages.entity';
import { Difficulty } from '../../common/difficulty/entities/difficulties.entity';
import { BookLike } from './book-like.entity';
import { BookReview } from './book-review.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('books')
export class Book extends BaseModel {
  @Column()
  authorId: number;

  @ManyToOne(() => Author, (a) => a.books, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'authorId' })
  author: Author;

  @Column()
  categoryId: number;

  @ManyToOne(() => BookCategory, (c) => c.books, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'categoryId' })
  category: BookCategory;

  @Column()
  languageId: number;

  @ManyToOne(() => Language, (l) => l.books, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'languageId' })
  language: Language;

  @Column()
  difficultyId: number;

  @ManyToOne(() => Difficulty, (d) => d.books, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'difficultyId' })
  difficulty: Difficulty;

  @Column({ type: 'varchar', length: 128 })
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  image?: string | null;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  newPrice?: string | null;

  @Column({
    type: 'decimal',
    precision: 2,
    scale: 1,
    nullable: true,
  })
  rating?: string | null;

  @Column({ type: 'int', default: 0 })
  reviewsCount: number;

  @Column({ type: 'int' })
  pages: number;

  @Column({ type: 'date' })
  pubDate: string;

  @OneToMany(() => BookLike, (x) => x.book)
  likes: BookLike[];

  @OneToMany(() => BookReview, (x) => x.book)
  reviews: BookReview[];
}
