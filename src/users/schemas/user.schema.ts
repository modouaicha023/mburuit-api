import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Nationality, Role, Sex } from '../user.enum';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  lastname: string;

  @Prop()
  firstname: string;

  @Prop()
  phone: string;

  @Prop()
  dateOfBirthday: Date;

  @Prop()
  email: string;

  @Prop({ enum: Object.values(Sex) })
  sex: string;

  @Prop({ enum: Object.values(Nationality) })
  nationality: string;

  @Prop({ enum: Object.values(Role) })
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
