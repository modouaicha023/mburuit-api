import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class Production {}

export const ProductionSchema = SchemaFactory.createForClass(Production);
