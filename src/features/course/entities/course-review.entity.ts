import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import type { User } from '../../auth/entities/user.entity';
import type { Course } from './course.entity';

@Entity('courseReviews')
export class CourseReview {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  userId: number;

  @Index()
  @Column()
  courseId: number;

  @ManyToOne('User', 'courseReviews', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne('Course', 'reviews', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'courseId' })
  course: Course;

  @Column({ type: 'int' })
  rating: number;

  @Column({ type: 'varchar', length: 512, nullable: true })
  comment?: string | null;

  @Column({ type: 'timestamptz' })
  date: Date;
}
