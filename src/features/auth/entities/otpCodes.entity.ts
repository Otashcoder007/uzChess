import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { User } from './user.entity';
import { OtpType } from '../../../core/enums/otpType';
import { BaseModel } from '../../../core/base-model';

@Entity('otpCodes')
export class OtpCode extends BaseModel {
  @Index()
  @Column({ type: 'int' })
  userId: number;

  @ManyToOne(() => User, (u) => u.otpCodes, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'varchar', length: 6 })
  code: string;

  @Column({ type: 'enum', enum: OtpType })
  type: OtpType;
}
