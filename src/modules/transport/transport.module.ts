import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { env, RABBIT_SERVICE } from '../config';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: RABBIT_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: env.RABBITMQ_URLS,
          queue: env.RABBITMQ_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  exports: [
    ClientsModule.register([
      {
        name: RABBIT_SERVICE,
        transport: Transport.RMQ,
        options: {
          urls: env.RABBITMQ_URLS,
          queue: env.RABBITMQ_QUEUE,
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
})
export class TransportModule {}
