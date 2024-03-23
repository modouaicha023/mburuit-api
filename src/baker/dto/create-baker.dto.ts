
import { IsArray, IsEmail, IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';
export class CreateBakerDto {
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

  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Ids' })
  readonly employeesIds: Types.ObjectId[];

  @IsNotEmpty()
  @IsMongoId()
  readonly managerId: Types.ObjectId;

  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Ids' })
  readonly clientsIds: Types.ObjectId[];

  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Ids' })
  readonly storesIds: Types.ObjectId[];

  @IsNotEmpty()
  @IsMongoId()
  readonly companyIds: Types.ObjectId;
}
