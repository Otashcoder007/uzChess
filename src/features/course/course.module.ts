import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CourseCategory } from './entities/course-category.entity';
import { Course } from './entities/course.entity';
import { CourseSection } from './entities/course-section.entity';
import { CourseLike } from './entities/course-like.entity';
import { CourseReview } from './entities/course-review.entity';
import { CourseLesson } from './entities/course-lessons.entity';
import { UserLesson } from './entities/user-lessons.entity';
import { CoursePurchased } from './entities/course-purchased.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CourseCategory,
      Course,
      CourseSection,
      CourseLesson,
      CoursePurchased,
      CourseLike,
      CourseReview,
      UserLesson,
    ]),
  ],
})
export class CourseModule {}
