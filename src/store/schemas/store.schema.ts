import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Baker } from 'src/baker/schemas/baker.schema';
import { Employee } from 'src/employee/entities/employee.entity';

@Schema({
  timestamps: true,
})
export class Store {
  @Prop()
  readonly name: string;

  @Prop()
  readonly address: string;

  @Prop()
  readonly email: string;

  @Prop()
  readonly phone: string;

  @Prop()
  readonly Capacity: number;

  @Prop()
  readonly seller: Employee[];

  @Prop()
  readonly baker: Baker;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
