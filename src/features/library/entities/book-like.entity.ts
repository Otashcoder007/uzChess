import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Book } from './book.entity';
import { User } from '../../auth/entities/user.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('bookLikes')
@Index(['userId', 'bookId'], { unique: true })
export class BookLike extends BaseModel {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  bookId: number;

  @ManyToOne(() => User, (u) => u.bookLikes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Book, (b) => b.likes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'bookId' })
  book: Book;

  @Column({ type: 'timestamptz' })
  date: Date;
}
