import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookCategory } from '../entities/book-category.entity';
import { BookCategoryCreateDto } from '../dtos/book-category/book-category.create.dto';
import { BookCategoryUpdateDto } from '../dtos/book-category/book-category.update.dto';

@Injectable()
export class BookCategoryService {
  constructor(
    @InjectRepository(BookCategory)
    private readonly repo: Repository<BookCategory>,
  ) {}

  create(dto: BookCategoryCreateDto) {
    return this.repo.save(this.repo.create(dto));
  }

  findAll() {
    return this.repo.find({ order: { id: 'DESC' } });
  }

  async findOne(id: number) {
    const item = await this.repo.findOne({ where: { id } });
    if (!item) throw new NotFoundException('Book category not found');
    return item;
  }

  async update(id: number, dto: BookCategoryUpdateDto) {
    const item = await this.findOne(id);
    Object.assign(item, dto);
    return this.repo.save(item);
  }
}
