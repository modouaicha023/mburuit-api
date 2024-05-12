import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Client } from 'src/client/schemas/client.schema';
import { Company } from 'src/company/schemas/company.schema';
import { Employee } from 'src/employee/schemas/employee.schema';
import { Production } from 'src/production/schemas/production.schema';
import { Store } from 'src/store/schemas/store.schema';

@Schema({
  timestamps: true,
})
export class Baker extends Document {
  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: false,
  })
  name: string;

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
  image: string;

  @Prop({ type: Types.ObjectId, ref: () => Employee })
  managerId: Employee;

  @Prop([{ type: Types.ObjectId, ref: () => Employee }])
  employeesIds: Employee[];

  @Prop([{ type: Types.ObjectId, ref: () => Client }])
  clientsIds: Client[];

  @Prop([{ type: Types.ObjectId, ref: () => Store }])
  storesIds: Store[];

  @Prop([{ type: Types.ObjectId, ref: () => Production }])
  productionIds: Production[];

  @Prop({ type: Types.ObjectId, res: 'Company' })
  companyId: Types.ObjectId;
}

export const BakerSchema = SchemaFactory.createForClass(Baker);
