import 'reflect-metadata';
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
      forbidNonWhitelisted: true,
    }),
  );

  const port: number = Number(process.env.PORT ?? 5678);
  await app.listen(port);

  console.log(`Server is listening on port => ${port}`);
  console.log(`-----------------------------------`);
  console.log(`You can check on here: http://localhost:${port}/docs`);
}

bootstrap();
