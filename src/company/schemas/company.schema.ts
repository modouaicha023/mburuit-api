import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { LegalStatus, Sector } from '../company.enum';

@Schema({
  timestamps: true,
})
export class Company extends Document {
  @Prop()
  name: string;

  @Prop()
  ninea: string;

  @Prop()
  address: string;

  @Prop()
  tradeRegister: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  description: string;

  @Prop({ enum: Object.values(Sector) })
  typeOfCompany: string;

  @Prop({ type: Types.ObjectId, ref: 'Employee' })
  bossId: Types.ObjectId;

  @Prop([{ type: Types.ObjectId, ref: 'Baker' }])
  bakersIds: Types.ObjectId[];

  @Prop({ enum: Object.values(LegalStatus) })
  legalStatus: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
