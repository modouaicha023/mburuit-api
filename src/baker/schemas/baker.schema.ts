import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({
  timestamps: true,
})
export class Baker extends Document {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;
;
  @Prop()
  email: string;

  @Prop()
  description: string;

  @Prop()
  typeOfCompany: string;

  @Prop({ type: Types.ObjectId, ref: 'Employee' })
  managerId: Types.ObjectId;

  @Prop([{ type: Types.ObjectId, ref: 'Employee' }])
  employeeIds: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Client' }])
  clientIds: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Store' }])
  storeIds: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Production' }])
  productionIds: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'Company' })
  companyId: Types.ObjectId;
}

export const BakerSchema = SchemaFactory.createForClass(Baker);
