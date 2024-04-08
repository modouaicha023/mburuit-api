import { Module } from '@nestjs/common';
import { BakerService } from './baker.service';
import { BakerController } from './baker.controller';
// import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BakerSchema } from './schemas/baker.schema';

@Module({
  imports: [
    // AuthModule,
    MongooseModule.forFeature([{ name: 'Baker', schema: BakerSchema }]),
  ],
  controllers: [BakerController],
  providers: [BakerService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class BakerModule {}
