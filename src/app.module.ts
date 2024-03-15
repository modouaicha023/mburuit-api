import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { OrderModule } from './order/order.module';
import { StoreModule } from './store/store.module';
import { SaleModule } from './sale/sale.module';
import { ClientModule } from './client/client.module';
import { InventoryModule } from './inventory/inventory.module';
import { ProductionModule } from './production/production.module';
import { DeliveryModule } from './delivery/delivery.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { PaymentModule } from './payment/payment.module';
import { FinanceModule } from './finance/finance.module';
import { SubscriptionModule } from './subscription/subscription.module';

@Module({
  imports: [AuthModule, UsersModule, OrderModule, StoreModule, SaleModule, ClientModule, InventoryModule, ProductionModule, DeliveryModule, DashboardModule, PaymentModule, FinanceModule, SubscriptionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
