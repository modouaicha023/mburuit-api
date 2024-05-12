import { Transform } from 'class-transformer';
import {
  IsArray,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';
export class CreateBakerDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  readonly address: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  readonly phone: string;

  @IsOptional()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Ids' })
  readonly employeesIds: Types.ObjectId[];

  @IsNotEmpty()
  @IsMongoId()
  readonly managerId: Types.ObjectId;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Ids' })
  readonly clientsIds: Types.ObjectId[];

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Ids' })
  readonly storesIds: Types.ObjectId[];

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Ids' })
  readonly productionIds: Types.ObjectId[];

  @IsNotEmpty()
  @IsMongoId()
  readonly companyId: Types.ObjectId;
}
