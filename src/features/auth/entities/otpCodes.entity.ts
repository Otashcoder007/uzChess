import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OtpType } from '../../../core/enums/otpType';
import type { User } from './user.entity';

@Entity('otpCodes')
export class OtpCode {
  @PrimaryGeneratedColumn()
  id: number;

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
