import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Terms } from './entities/terms.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Terms])],
})
export class TermsModule {}
