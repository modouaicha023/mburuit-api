import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
@Schema({
  timestamps: true,
})
export class Product {
  @Prop()
  name: string;

  @Prop()
  unitPrice: number;

  @Prop()
  description: string;

  @Prop()
  weight: string;

  @Prop()
  quantityUnit: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
