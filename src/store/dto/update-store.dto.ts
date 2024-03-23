import {
  IsArray,
  IsEmail,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class UpdateStoreDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly address: string;

  @IsOptional()
  @IsString()
  readonly tradeRegister: string;

  @IsOptional()
  @IsString()
  readonly phone: string;

  @IsOptional()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsNumber()
  readonly Capacity: number;
  
  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true, message: 'bad Ids' })
  readonly sellerIds: Types.ObjectId[];

  @IsOptional()
  @IsMongoId()
  readonly bakerId: Types.ObjectId;
}
