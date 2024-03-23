import {
  IsArray,
  IsEmail,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Sector, LegalStatus } from '../company.enum';
import { Types } from 'mongoose';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsNotEmpty()
  @IsString()
  readonly ninea: string;

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

  @IsString()
  readonly description: string;

  @IsArray()
  @IsEnum(Sector, { message: 'Use a correct activity sector' })
  readonly sector: Sector[];

  @IsArray()
  @IsMongoId()
  readonly bossId: Types.ObjectId;

  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Id' })
  readonly bakers: Types.ObjectId[];

  @IsNotEmpty()
  @IsEnum(LegalStatus, { message: 'Use a correct legal status' })
  readonly legalStatus: LegalStatus;
}
