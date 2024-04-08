import { Module } from '@nestjs/common';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
// import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { StoreSchema } from './schemas/store.schema';

@Module({
  imports: [
    // AuthModule,
    MongooseModule.forFeature([{ name: 'Store', schema: StoreSchema }]),
  ],
  controllers: [StoreController],
  providers: [StoreService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class StoreModule {}
