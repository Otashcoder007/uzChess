import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Course } from './course.entity';
import { CourseLesson } from './course-lessons.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('courseSections')
export class CourseSection extends BaseModel {
  @Column()
  courseId: number;

  @ManyToOne(() => Course, (c) => c.sections, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Column({ type: 'varchar', length: 256 })
  title: string;

  @Column({ type: 'int', nullable: true })
  order?: number | null;

  @Column({ type: 'timestamp' })
  date: Date;

  @OneToMany(() => CourseLesson, (l) => l.section)
  lessons: CourseLesson[];
}
