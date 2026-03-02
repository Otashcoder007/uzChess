import { Column, Entity, OneToMany } from 'typeorm';
import { Book } from './book.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('bookCategories')
export class BookCategory extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;

  @OneToMany('Book', 'category')
  books: Book[];
}
