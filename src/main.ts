import { NestFactory } from '@nestjs/core';
import { ApiModule } from './api/api.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const api = await NestFactory.create(ApiModule);
  api.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  await api.listen(3000);
}

bootstrap();
