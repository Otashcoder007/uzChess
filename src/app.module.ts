import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeormConfig } from './config/typeorm.config';

import { CourseModule } from './features/course/course.module';
import { LibraryModule } from './features/library/library.module';
import { AuthModule } from './features/auth/auth.module';
import { ChessModule } from './features/chess/chess.module';
import { AuthorsModule } from './features/common/authors/author.module';
import { DifficultiesModule } from './features/common/difficulty/difficulty.module';
import { LanguagesModule } from './features/common/languages/language.module';
import { TermsModule } from './features/common/terms/terms.module';
import { NewsModule } from './features/news/news.module';
import { ReportsModule } from './features/reports/reports.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    CourseModule,
    LibraryModule,
    AuthModule,
    ChessModule,
    AuthorsModule,
    DifficultiesModule,
    LanguagesModule,
    TermsModule,
    NewsModule,
    ReportsModule,
  ],
})
export class AppModule {}
