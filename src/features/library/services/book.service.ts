import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Book } from '../entities/book.entity';
import { BookCreateDto } from '../dtos/book/book.create.dto';
import { BookUpdateDto } from '../dtos/book/book.update.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book) private readonly repo: Repository<Book>,
  ) {}

  create(dto: BookCreateDto) {
    return this.repo.save(
      this.repo.create({
        ...dto,
        image: dto.image ?? null,
        newPrice: dto.newPrice ?? null,
        rating: null,
        reviewsCount: 0,
      }),
    );
  }

  findAll() {
    return this.repo.find({
      relations: {
        author: true,
        category: true,
        language: true,
        difficulty: true,
      },
      order: { id: 'DESC' },
    });
  }

  async findOne(id: number) {
    const book = await this.repo.findOne({
      where: { id },
      relations: {
        author: true,
        category: true,
        language: true,
        difficulty: true,
        reviews: true,
        likes: true,
      },
    });
    if (!book) throw new NotFoundException('Book not found');
    return book;
  }

  async update(id: number, dto: BookUpdateDto) {
    const book = await this.findOne(id);
    Object.assign(book, dto);
    return this.repo.save(book);
  }
}
