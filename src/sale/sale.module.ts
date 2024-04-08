import { Module } from '@nestjs/common';
import { SaleService } from './sale.service';
import { SaleController } from './sale.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleSchema } from './schemas/sale.schema';

@Module({
  imports: [
    // AuthModule,
    MongooseModule.forFeature([{ name: 'Sale', schema: SaleSchema }]),
  ],
  controllers: [SaleController],
  providers: [SaleService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class SaleModule {}
