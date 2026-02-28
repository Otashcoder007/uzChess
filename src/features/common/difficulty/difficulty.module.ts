import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Difficulty } from './entities/difficulties.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Difficulty])],
  exports: [TypeOrmModule],
})
export class DifficultiesModule {}
