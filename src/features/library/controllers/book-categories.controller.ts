import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookCategoryService } from '../services/book-category.service';
import { BookCategoryCreateDto } from '../dtos/book-category/book-category.create.dto';
import { BookCategoryUpdateDto } from '../dtos/book-category/book-category.update.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('library/categories')
export class BookCategoriesController {
  constructor(private readonly service: BookCategoryService) {}

  @Post()
  @ApiOkResponse()
  create(@Body() dto: BookCategoryCreateDto) {
    return this.service.create(dto);
  }

  @Get()
  @ApiOkResponse()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @ApiOkResponse()
  findOne(@Param('id') id: string) {
    return this.service.findOne(Number(id));
  }

  @Patch(':id')
  @ApiOkResponse()
  update(
    @Param('id') id: string,
    @Body() dto: BookCategoryUpdateDto,
  ) {
    return this.service.update(Number(id), dto);
  }
}
