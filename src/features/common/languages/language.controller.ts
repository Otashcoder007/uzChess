import { Body, Controller, Get, Post } from '@nestjs/common';
import { LanguageService } from './language.service';
import { LanguageCreateDto } from './dtos/language-create-dto';

@Controller('languages')
export class LanguagesController {
  constructor(private readonly service: LanguageService) {}

  @Post()
  create(@Body() dto: LanguageCreateDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
