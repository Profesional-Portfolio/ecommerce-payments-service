import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { env } from './modules/config';
import { ValidationPipe } from '@nestjs/common';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.connectMicroservice<MicroserviceOptions>(
    {
      transport: Transport.RMQ,
      options: {
        urls: env.RABBITMQ_URLS,
        queue: env.RABBITMQ_QUEUE,
        queueOptions: {
          durable: false,
        },
      },
    },
    {
      inheritAppConfig: true,
    },
  );

  await app.startAllMicroservices();
  await app.listen(env.PORT);
}
void bootstrap();
