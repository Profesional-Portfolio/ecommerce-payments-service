import { Module } from '@nestjs/common';
import { PaymentsModule } from './modules/payments/payments.module';
import { TransportModule } from './modules/transport/transport.module';

@Module({
  imports: [PaymentsModule, TransportModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
