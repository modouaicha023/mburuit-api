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
import { CompanyModule } from './company/company.module';
import { BakerModule } from './baker/baker.module';
import { EmployeeModule } from './employee/employee.module';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI ?? ''),
    AuthModule,
    UsersModule,
    OrderModule,
    StoreModule,
    SaleModule,
    ClientModule,
    InventoryModule,
    ProductionModule,
    DeliveryModule,
    DashboardModule,
    PaymentModule,
    FinanceModule,
    SubscriptionModule,
    CompanyModule,
    BakerModule,
    EmployeeModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
