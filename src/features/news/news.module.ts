import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { News } from './entities/news.entity';
import { NewsView } from './entities/news-view.entity';

@Module({
  imports: [TypeOrmModule.forFeature([News, NewsView])],
})
export class NewsModule {}
