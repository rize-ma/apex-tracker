import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: ['http://localhost:3000', 'https://apex-tracker-nine.vercel.app'],
  });
  await app.listen(process.env.PORT || 3005);
}
bootstrap();
