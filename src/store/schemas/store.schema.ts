import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

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

  @Prop([{ type: Types.ObjectId, ref: 'Employee' }])
  readonly sellerIds: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Inventory' }])
  readonly inventoryIds: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: 'Baker' })
  readonly bakerId: Types.ObjectId;
}

export const StoreSchema = SchemaFactory.createForClass(Store);
