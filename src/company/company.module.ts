import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyController } from './company.controller';
// import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanySchema } from './schemas/company.schema';

@Module({
  imports: [
    // AuthModule,
    MongooseModule.forFeature([{ name: 'Company', schema: CompanySchema }]),
  ],
  controllers: [CompanyController],
  providers: [CompanyService],
})
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class CompanyModule {}
