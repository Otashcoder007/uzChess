import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Author } from '../../common/authors/entities/author.entity';
import { CourseCategory } from './course-category.entity';
import { CourseReview } from './course-review.entity';
import { Language } from '../../common/languages/entities/languages.entity';
import { Difficulty } from '../../common/difficulty/entities/difficulties.entity';
import { CourseSection } from './course-section.entity';
import { CourseLesson } from './course-lessons.entity';
import { CoursePurchased } from './course-purchased.entity';
import { CourseLike } from './course-like.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('courses')
export class Course extends BaseModel {
  @Column()
  authorId: number;

  @ManyToOne(() => Author, (a) => a.courses, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'authorId' })
  author: Author;

  @Column()
  categoryId: number;

  @ManyToOne(() => CourseCategory, (cc) => cc.courses, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'categoryId' })
  category: CourseCategory;

  @Column()
  languageId: number;

  @ManyToOne(() => Language, (l) => l.courses, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'languageId' })
  language: Language;

  @Column()
  difficultyId: number;

  @ManyToOne(() => Difficulty, (d) => d.courses, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'difficultyId' })
  difficulty: Difficulty;

  @Column({ type: 'varchar', length: 128 })
  title: string;

  @Column({ type: 'varchar', length: 128 })
  image: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: string;

  @Column({
    type: 'decimal',
    precision: 12,
    scale: 2,
    nullable: true,
  })
  newPrice?: string | null;

  @Column({ type: 'int', default: 0 })
  reviewsCount: number;

  @Column({
    type: 'decimal',
    precision: 2,
    scale: 1,
    nullable: true,
  })
  rating?: string | null;

  @Column({ type: 'int', default: 0 })
  sectionsCount: number;

  @Column({ type: 'int', default: 0 })
  lessonsCount: number;

  @OneToMany(() => CourseSection, (s) => s.course)
  sections: CourseSection[];

  @OneToMany(() => CourseLesson, (l) => l.course)
  lessons: CourseLesson[];

  @OneToMany(() => CoursePurchased, (p) => p.course)
  purchases: CoursePurchased[];

  @OneToMany(() => CourseLike, (l) => l.course)
  likes: CourseLike[];

  @OneToMany(() => CourseReview, (r) => r.course)
  reviews: CourseReview[];
}
