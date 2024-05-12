import { Module } from '@nestjs/common';
import { BakerService } from './baker.service';
import { BakerController } from './baker.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BakerSchema } from './schemas/baker.schema';
import './schemas/baker.index';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Baker', schema: BakerSchema }]),
  ],
  controllers: [BakerController],
  providers: [BakerService],
})
export class BakerModule {}
