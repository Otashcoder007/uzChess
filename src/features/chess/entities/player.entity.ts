import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Country } from './country.entity';
import { Match } from './match.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('players')
export class Player extends BaseModel {
  @Column()
  countryId: number;

  @ManyToOne('Country', 'players', {
    onDelete: 'RESTRICT',
  })
  @JoinColumn({ name: 'countryId' })
  country: Country;

  @Column({ type: 'varchar', length: 64 })
  fullName: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  image?: string | null;

  @Column({ type: 'int', nullable: true })
  classic?: number | null;

  @Column({ type: 'int', nullable: true })
  rapid?: number | null;

  @Column({ type: 'int', nullable: true })
  blitz?: number | null;

  @OneToMany('Match', 'firstPlayerObj')
  firstMatches: Match[];

  @OneToMany('Match', 'secondPlayerObj')
  secondMatches: Match[];
}
