import 'dotenv/config';
import request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { createTestApp } from '../utils/test-app';
import { teardownTestApp } from '../utils/teardown';

describe('LanguagesController (e2e)', () => {
  let dataSource: DataSource;
  let app: INestApplication;

  beforeAll(async () => ({ app, dataSource } = await createTestApp()));
  afterAll(async () => await teardownTestApp(app, dataSource));

  interface LanguageResponse {
    id: number;
    title: string;
    code: string;
  }

  it('POST languages', async () => {
    const res = await request(app.getHttpServer())
      .post('languages')
      .send({ title: 'English', code: 'en' })
      .expect(201);

    const body = res.body as LanguageResponse;

    expect(body.id).toEqual(1);
    expect(body.title).toEqual('English');
    expect(body.code).toEqual('en');
  });

  it('', async () => {
    const res = await request(app.getHttpServer()).post('').send().expect(200);
  });
});
