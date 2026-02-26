import { Column, Entity, Index, OneToMany } from 'typeorm';
import { OtpCode } from './otpCodes.entity';
import { NewsView } from '../../news/entities/news-view.entity';

import { LoginType } from '../../../core/enums/loginType';
import { CourseReview } from '../../course/entities/course-review.entity';
import { UserLesson } from '../../course/entities/user-lessons.entity';
import { CoursePurchased } from '../../course/entities/course-purchased.entity';
import { CourseLike } from '../../course/entities/course-like.entity';
import { BookLike } from '../../library/entities/book-like.entity';
import { BookReview } from '../../library/entities/book-review.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('users')
export class User extends BaseModel {
  @Column({ type: 'varchar', length: 64 })
  fullName: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  profileImage?: string | null;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 64 })
  login: string;

  @Column({ type: 'enum', enum: LoginType })
  loginType: LoginType;

  @Column({ type: 'varchar', length: 128, nullable: true })
  password?: string | null;

  @Column({ type: 'date', nullable: true })
  birthDate?: string | null;

  @Column({ type: 'boolean', default: false })
  isVerified: boolean;

  @Column({ type: 'boolean', default: false })
  isActive: boolean;

  @OneToMany(() => OtpCode, (x) => x.user)
  otpCodes: OtpCode[];

  @OneToMany(() => CoursePurchased, (x) => x.user)
  purchasedCourses: CoursePurchased[];

  @OneToMany(() => CourseLike, (x) => x.user)
  courseLikes: CourseLike[];

  @OneToMany(() => CourseReview, (x) => x.user)
  courseReviews: CourseReview[];

  @OneToMany(() => UserLesson, (x) => x.user)
  lessonProgress: UserLesson[];

  @OneToMany(() => BookLike, (x) => x.user)
  bookLikes: BookLike[];

  @OneToMany(() => BookReview, (x) => x.user)
  bookReviews: BookReview[];

  @OneToMany(() => NewsView, (x) => x.user)
  newsViews: NewsView[];
}
