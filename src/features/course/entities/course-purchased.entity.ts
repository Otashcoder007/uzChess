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

@Entity('course-purchased')
@Index(['userId', 'courseId'], { unique: true })
export class CoursePurchased extends BaseModel {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  courseId: number;

  @ManyToOne(() => User, (u) => u.purchasedCourses, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Course, (c) => c.purchases, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Column({ type: 'boolean', default: false })
  isCompleted: boolean;

  @Column({ type: 'timestamptz' })
  date: Date;
}
