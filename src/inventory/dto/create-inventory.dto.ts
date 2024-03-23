import {
  IsDateString,
  IsMongoId,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class CreateInventoryDto {
  @IsNotEmpty()
  @IsString()
  readonly type: string;

  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @IsNotEmpty()
  @IsDateString()
  readonly date: Date;

  @IsNotEmpty()
  @IsMongoId()
  readonly product: Types.ObjectId;

  @IsNotEmpty()
  @IsNumber()
  readonly previousStock: number;

  @IsNotEmpty()
  @IsNumber()
  readonly productionStock: number;

  @IsNotEmpty()
  @IsNumber()
  readonly receivedStock: number;

  @IsNotEmpty()
  @IsNumber()
  readonly remainingStock: number;

  @IsNotEmpty()
  @IsNumber()
  readonly returnStock: number;

  @IsNotEmpty()
  @IsNumber()
  readonly chargesAmount: number;

  @IsNotEmpty()
  readonly chargesDescription: string;

  @IsNotEmpty()
  @IsNumber()
  readonly totalAmount: number;

  @IsNotEmpty()
  @IsNumber()
  readonly amountPaid: number;

  @IsNotEmpty()
  @IsNumber()
  readonly remainingPaid: number;

  @IsNotEmpty()
  @IsMongoId()
  readonly baker: Types.ObjectId;

  @IsNotEmpty()
  @IsMongoId()
  readonly store: Types.ObjectId;

  @IsNotEmpty()
  @IsMongoId()
  readonly client: Types.ObjectId;
}
