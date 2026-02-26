import { Column, Entity, OneToMany } from 'typeorm';
import { Book } from '../../../library/entities/book.entity';
import { Course } from '../../../course/entities/course.entity';
import { BaseModel } from '../../../../core/base-model';

@Entity('authors')
export class Author extends BaseModel {
  @Column({ type: 'varchar', length: 64 })
  fullName: string;

  @OneToMany(() => Course, (c) => c.authorId)
  courses: Course[];

  @OneToMany(() => Book, (b) => b.author)
  books: Book[];
}
