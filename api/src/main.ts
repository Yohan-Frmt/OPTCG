import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger, ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { QueryFailedExceptionFilter } from "./shared/filters/query-failed-exception.filter";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuration
  const config = app.get(ConfigService);
  const port = config.get("PORT") ?? 3000;
  const prefix = "api";
  app.setGlobalPrefix(prefix);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.useGlobalFilters(new QueryFailedExceptionFilter());
  app.enableCors();

  //Swagger
  SwaggerModule.setup(
    prefix,
    app,
    SwaggerModule.createDocument(
      app,
      new DocumentBuilder()
        .setTitle("OPTCG")
        .setVersion("1.0")
        .addBearerAuth()
        .build()
    )
  );

  await app.listen(port);
  Logger.log(`Application is running on: http://localhost:${port}/${prefix}`);
}

bootstrap();
