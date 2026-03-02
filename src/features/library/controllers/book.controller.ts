import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookService } from '../services/book.service';
import { BookUpdateDto } from '../dtos/book/book.update.dto';
import { BookCreateDto } from '../dtos/book/book.create.dto';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('books')
export class BookController {
  constructor(private readonly service: BookService) {}

  @Post()
  @ApiOkResponse()
  create(@Body() dto: BookCreateDto) {
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
  update(@Param('id') id: string, @Body() dto: BookUpdateDto) {
    return this.service.update(Number(id), dto);
  }
}
