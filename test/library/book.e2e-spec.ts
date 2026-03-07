import 'dotenv/config';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { createTestApp } from '../utils/test-app';
import { teardownTestApp } from '../utils/teardown';
import { DataSource } from 'typeorm';

describe('BookController (e2e)', () => {
  let app: INestApplication;
  let dataSource: DataSource;
  let jwtToken: string;

  beforeAll(async () => {
    ({ app, dataSource } = await createTestApp());
  });
  afterAll(async () => await teardownTestApp(app, dataSource));

  it('POST books => 201', async () => {
    const res = await request(app.getHttpServer())
      .post('books')
      .send({})
      .expect(201);
  });
});
