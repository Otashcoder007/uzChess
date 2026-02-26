import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { ReportType } from '../../../core/enums/reportType';
import { ReportCategory } from './report-category.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('reports')
export class Report extends BaseModel {
  @Index()
  @Column()
  reportCategoryId: number;

  @ManyToOne(() => ReportCategory, (rc) => rc.reports, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'reportCategoryId' })
  category: ReportCategory;

  @Column({ type: 'enum', enum: ReportType })
  target: ReportType;

  @Index()
  @Column({ type: 'int' })
  targetId: number;

  @Column({ type: 'varchar', length: 256, nullable: true })
  description?: string | null;

  @Column({ type: 'timestamp' })
  date: Date;
}
