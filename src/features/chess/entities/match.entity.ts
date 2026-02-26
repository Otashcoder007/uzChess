import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Player } from './player.entity';
import { WinnerType } from '../../../core/enums/winnerType';
import { MatchTypes } from '../../../core/enums/matchTypes';
import { BaseModel } from '../../../core/base-model';

@Entity('matches')
export class Match extends BaseModel {
  @Index()
  @Column()
  firstPlayer: number;

  @ManyToOne(() => Player, (p) => p.firstMatches, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'firstPlayer' })
  firstPlayerObj: Player;

  @Column({ type: 'int' })
  firstPlayerResult: number;

  @Index()
  @Column()
  secondPlayer: number;

  @ManyToOne(() => Player, (p) => p.secondMatches, {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'secondPlayer' })
  secondPlayerObj: Player;

  @Column({ type: 'int' })
  secondPlayerResult: number;

  @Column({ type: 'enum', enum: MatchTypes })
  type: MatchTypes;

  @Column({ type: 'int' })
  moves: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'enum', enum: WinnerType })
  winner: WinnerType;
}
