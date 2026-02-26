import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { News } from './news.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('newsViews')
@Index(['userId', 'newsId'], { unique: true })
export class NewsView extends BaseModel {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  newsId: number;

  @ManyToOne(() => User, (u) => u.newsViews, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => News, (n) => n.views, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'newsId' })
  news: News;

  @Column({ type: 'timestamp' })
  firstDate: Date;

  @Column({ type: 'timestamp' })
  lastDate: Date;

  @Column({ type: 'int', default: 1 })
  count: number;
}
