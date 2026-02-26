import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';

import { AuthModule } from './features/auth/auth.module';
import { CourseModule } from './features/course/course.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    AuthModule,
    CourseModule,
  ],
})
export class AppModule {}
