import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000;
  const prefix = 'api';
  app.setGlobalPrefix(prefix);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  await app.listen(port);
  Logger.log(`Application is running on: http://localhost:${port}/${prefix}`);
}

bootstrap();
