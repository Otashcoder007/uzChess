import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { OtpType } from '../../../core/enums/otpType';
import type { User } from './user.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('otpCodes')
export class OtpCode extends BaseModel {
  @Index()
  @Column()
  userId: number;

  @ManyToOne('User', 'otpCodes', { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'varchar', length: 6 })
  code: string;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'enum', enum: OtpType })
  type: OtpType;
}
