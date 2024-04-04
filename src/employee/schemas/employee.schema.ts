import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

@Schema({
  timestamps: true,
})
export class Client extends User {
  @Prop()
  incomes: number;

  @Prop()
  reliquat: number;

  @Prop()
  salary: number;

  @Prop([{ type: Types.ObjectId, ref: 'Order' }])
  orderIds: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Inventory' }])
  inventorieIds: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Sale' }])
  saleIds: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Subscription' }])
  subscriptionIds: Types.ObjectId[];
}

export const ClientSchema = SchemaFactory.createForClass(Client);
