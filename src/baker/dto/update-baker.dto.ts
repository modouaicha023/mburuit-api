import {
  IsArray,
  IsEmail,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';
import { Types } from 'mongoose';

export class UpdateBakerDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsOptional()
  @IsString()
  readonly ninea: string;

  @IsOptional()
  @IsString()
  readonly address: string;

  @IsOptional()
  @IsString()
  readonly phone: string;

  @IsOptional()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Ids' })
  readonly employeesIds: Types.ObjectId[];

  @IsOptional()
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
  @IsMongoId()
  readonly companyIds: Types.ObjectId;
}
