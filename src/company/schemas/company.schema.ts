import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

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

  @Prop()
  typeOfCompany: string;

  @Prop([{ type: Types.ObjectId, ref: 'Employee' }])
  employees: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Baker' }])
  bakers: Types.ObjectId[];

  @Prop()
  legalStatus: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
