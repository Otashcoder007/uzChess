import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Course } from './course.entity';
import { User } from '../../auth/entities/user.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('courseLikes')
@Index(['userId', 'courseId'], { unique: true })
export class CourseLike extends BaseModel {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  courseId: number;

  @ManyToOne('User', 'courseLikes', {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne('Course', 'likes', {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Column({ type: 'timestamp' })
  date: Date;
}
