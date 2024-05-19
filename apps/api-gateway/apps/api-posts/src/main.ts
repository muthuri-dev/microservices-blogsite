import { NestFactory } from '@nestjs/core';
import { ApiPostsModule } from './api-posts.module';

async function bootstrap() {
  const app = await NestFactory.create(ApiPostsModule);
  await app.listen(3002);
}
bootstrap();
