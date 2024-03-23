import {
  IsArray,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';
export class CreateStoreDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @IsNotEmpty()
  @IsString()
  readonly tradeRegister: string;

  @IsNotEmpty()
  @IsString()
  readonly phone: string;

  @IsNotEmpty()
  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  @IsNumber()
  readonly Capacity: number;

  @IsArray()
  @IsMongoId({ each: true, message: 'bad Ids' })
  readonly sellerIds: Types.ObjectId[];

  @IsNotEmpty()
  @IsMongoId()
  readonly bakerId: Types.ObjectId;
}
