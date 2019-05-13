import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { number } from 'yargs';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  
  await app.listen(3000);
}

bootstrap();
