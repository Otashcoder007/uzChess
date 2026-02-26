import { Column, Entity, OneToMany } from 'typeorm';
import { Course } from '../../../course/entities/course.entity';
import { Book } from '../../../library/entities/book.entity';
import { BaseModel } from '../../../../core/base-model';

@Entity('languages')
export class Language extends BaseModel {
  @Column({ type: 'varchar', length: 32, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 2, unique: true })
  code: string;

  @OneToMany(() => Course, (c) => c.languageId)
  courses: Course[];

  @OneToMany(() => Book, (b) => b.language)
  books: Book[];
}
