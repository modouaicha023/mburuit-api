import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';
import { Type } from '../client.enum';

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

  @Prop({ enum: Object.values(Type) })
  type: string;

  @Prop([{ type: Types.ObjectId, ref: 'Order' }])
  orderIds: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Inventory' }])
  inventorieIds: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Sale' }])
  saleIds: Types.ObjectId[];

  @Prop([{ type: Types.ObjectId, ref: 'Subscription' }])
  subscriptionIds: Types.ObjectId[];

  @Prop({ type: Types.ObjectId, ref: () => User })
  UserRef: User;
}

export const ClientSchema = SchemaFactory.createForClass(Client);
