import { Column, Entity, OneToMany } from 'typeorm';
import { Course } from '../../../course/entities/course.entity';
import { Book } from '../../../library/entities/book.entity';
import { BaseModel } from '../../../../core/base-model';

@Entity('difficulties')
export class Difficulty extends BaseModel {
  @Column({ type: 'varchar', length: 32, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 128 })
  icon: string;

  @OneToMany(() => Course, (c) => c.difficultyId)
  courses: Course[];

  @OneToMany(() => Book, (b) => b.difficulty)
  books: Book[];
}
