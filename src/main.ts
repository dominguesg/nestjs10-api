import { ValidationPipe } from '@nestjs/common';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CatchAllErrorsExcetionFilter } from './exception-filters/catch-all-errors.excetion-filter';
import { PrismaExceptionFilter } from './exception-filters/prisma.excetion-filter';
import { InvalidRelationExcetionFilter } from './exception-filters/invalid-relation.excetion-filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(
    new CatchAllErrorsExcetionFilter(httpAdapter),
    new PrismaExceptionFilter(),
    new InvalidRelationExcetionFilter(),
  );

  app.useGlobalPipes(
    new ValidationPipe({
      errorHttpStatusCode: 422, //400
      transform: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
