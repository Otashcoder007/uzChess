import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Language } from './entities/languages.entity';
import { LanguagesController } from './language.controller';
import { LanguageService } from './language.service';

@Module({
  imports: [TypeOrmModule.forFeature([Language])],
  exports: [TypeOrmModule],
  controllers: [LanguagesController],
  providers: [LanguageService],
})
export class LanguagesModule {}
