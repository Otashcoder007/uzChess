import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Language } from './entities/languages.entity';
import { LanguageCreateDto } from './dtos/language-create-dto';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(Language) private readonly repo: Repository<Language>,
  ) {}

  create(dto: LanguageCreateDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find();
  }
}
