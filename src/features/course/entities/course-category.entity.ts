import { Column, Entity, OneToMany } from 'typeorm';
import { Course } from './course.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('courseCategories')
export class CourseCategory extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;

  @OneToMany(() => Course, (c) => c.categoryId)
  courses: Course[];
}
