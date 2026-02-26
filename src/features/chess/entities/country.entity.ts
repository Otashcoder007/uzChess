import { Column, Entity, OneToMany } from 'typeorm';
import { Player } from './player.entity';
import { BaseModel } from '../../../core/base-model';

@Entity('countries')
export class Country extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 128 })
  flag: string;

  @OneToMany(() => Player, (p) => p.country)
  players: Player[];
}
