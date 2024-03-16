import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Baker } from 'src/baker/entities/baker.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Schema({
  timestamps: true,
})
export class Company {
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

  @Prop()
  employees: Employee[];

  @Prop()
  bakers: Baker[];

  @Prop()
  legalStatus: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
