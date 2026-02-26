import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Book } from './book.entity';
import { User } from '../../auth/entities/user.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('bookReviews')
export class BookReview extends BaseModel {
  @Index()
  @Column()
  userId: number;

  @Index()
  @Column()
  bookId: number;

  @ManyToOne(() => User, (u) => u.bookReviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Book, (b) => b.reviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'bookId' })
  book: Book;
w
  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'varchar', length: 512, nullable: true })
  comment?: string | null;

  @Column({ type: 'timestamp' })
  date: Date;
}
