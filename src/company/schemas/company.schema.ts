import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { LegalStatus, Sector } from '../company.enum';
import { Employee } from 'src/employee/schemas/employee.schema';
import { Baker } from 'src/baker/schemas/baker.schema';

@Schema({
  timestamps: true,
})
export class Company extends Document {
  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: true,
  })
  name: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: true,
    uppercase: true,
  })
  ninea: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: false,
  })
  address: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: true,
  })
  tradeRegister: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: false,
  })
  phone: string;

  @Prop({
    type: String,
    required: false,
    trim: true,
    unique: false,
  })
  email: string;

  @Prop({
    type: String,
    required: false,
    trim: true,
    unique: false,
  })
  description: string;

  @Prop({
    type: String,
    required: false,
    trim: true,
    unique: false,
  })
  logo: string;

  @Prop({ type: String, enum: Object.values(Sector) })
  typeOfCompany: Sector;

  @Prop({ type: Types.ObjectId, ref: () => Employee })
  bossId: Employee;

  @Prop([{ type: Types.ObjectId, ref: () => Baker }])
  bakersIds: Baker[];

  @Prop({ type: String, enum: Object.values(LegalStatus) })
  legalStatus: LegalStatus;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
