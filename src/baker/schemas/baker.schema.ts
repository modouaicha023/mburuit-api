import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Client } from 'src/client/entities/client.entity';
import { Company } from 'src/company/schemas/company.schema';
import { Employee } from 'src/employee/entities/employee.entity';
import { Store } from 'src/store/schemas/store.schema';

@Schema({
  timestamps: true,
})
export class Baker {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  phone: string;

  @Prop()
  email: string;

  @Prop()
  description: string;

  @Prop()
  typeOfCompany: string;

  @Prop()
  manager: Employee;

  @Prop()
  employees: Employee[];

  @Prop()
  clients: Client[];

  @Prop()
  stores: Store[];

  @Prop()
  comapny: Company;

}

export const BakerSchema = SchemaFactory.createForClass(Baker);