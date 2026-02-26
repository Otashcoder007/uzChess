import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Course } from './course.entity';
import { User } from '../../auth/entities/user.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('courseReviews')
export class CourseReview extends BaseModel {
  @Index()
  @Column()
  userId: number;

  @Index()
  @Column()
  courseId: number;

  @ManyToOne(() => User, (u) => u.courseReviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Course, (c) => c.reviews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'varchar', length: 512, nullable: true })
  comment?: string | null;

  @Column({ type: 'timestamp' })
  date: Date;
}
