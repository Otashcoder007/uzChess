import { Column, Entity, OneToMany } from 'typeorm';
import { NewsView } from './news-view.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('news')
export class News extends BaseModel {
  @Column({ type: 'varchar', length: 256 })
  title: string;

  @Column({ type: 'varchar', length: 128 })
  image: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @OneToMany(() => NewsView, (nv) => nv.news)
  views: NewsView[];
}
