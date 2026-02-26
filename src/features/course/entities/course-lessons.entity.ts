import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Course } from './course.entity';
import { CourseSection } from './course-section.entity';
import { UserLesson } from './user-lessons.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('courseLessons')
export class CourseLesson extends BaseModel {
  @Column()
  courseId: number;

  @ManyToOne(() => Course, (c) => c.lessonsCount, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Column()
  courseSectionId: number;

  @ManyToOne(() => CourseSection, (s) => s.lessons, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseSectionId' })
  section: CourseSection;

  @Column({ type: 'varchar', length: 128 })
  title: string;

  @Column({ type: 'text', nullable: true })
  content?: string | null;

  @Column({ type: 'varchar', length: 128, nullable: true })
  thumbnail?: string | null;

  @Column({ type: 'varchar', length: 256 })
  video: string;

  @Column({ type: 'int', nullable: true })
  order?: number | null;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'boolean', default: false })
  isFree: boolean;

  @OneToMany(() => UserLesson, (ul) => ul.courseLessonId)
  progress: UserLesson[];
}
