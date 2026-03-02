import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { CourseLesson } from './course-lessons.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('users_lessons')
@Index(['userId', 'courseLessonId'], { unique: true })
export class UserLesson extends BaseModel {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  courseLessonId: number;

  @ManyToOne('User', 'lessonProgress', {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne('CourseLesson', 'progress', {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseLessonId' })
  lesson: CourseLesson;

  @Column({ type: 'int', nullable: true })
  stoppedAt?: number | null;

  @Column({ type: 'boolean', default: false })
  isCompleted: boolean;
}
