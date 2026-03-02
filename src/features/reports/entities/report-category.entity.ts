import { Column, Entity, OneToMany } from 'typeorm';
import { Report } from './report.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('reportCategories')
export class ReportCategory extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;

  @Column({ type: 'int', nullable: true })
  order?: number | null;

  @OneToMany('Report', 'category')
  reports: Report[];
}
