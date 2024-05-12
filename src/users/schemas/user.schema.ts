import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Nationality, Sex, UserType } from '../user.enum';

@Schema({
  timestamps: true,
})
export class User extends Document {
  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: true,
  })
  username: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: false,
  })
  password: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: false,
  })
  lastname: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: false,
  })
  firstname: string;

  @Prop({
    type: String,
    required: true,
    trim: true,
    unique: false,
  })
  phone: string;

  @Prop({
    type: String,
    required: false,
    trim: true,
    unique: false,
  })
  email: string;

  @Prop({
    type: String,
    required: false,
    trim: true,
    unique: false,
  })
  address: string;

  @Prop({
    type: Date,
    required: false,
    unique: false,
    transform: (value: string) => (value ? new Date(value) : undefined),
  })
  dateOfBirthday: Date;

  @Prop({
    type: String,
    required: false,
    trim: true,
    unique: false,
  })
  profileImage: string;

  @Prop({ type: String, enum: Object.values(Sex) })
  sex: Sex;

  @Prop({ type: String, enum: Object.values(Nationality) })
  nationality: Nationality;

  @Prop({ type: String, enum: Object.values(UserType) })
  userType: UserType;
}

export const UserSchema = SchemaFactory.createForClass(User);
