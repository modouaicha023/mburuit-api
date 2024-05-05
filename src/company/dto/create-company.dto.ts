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
  name: string;

  @IsNotEmpty()
  @IsString()
  ninea: string;

  @IsNotEmpty()
  @IsString()
  address: string;

  @IsNotEmpty()
  @IsString()
  tradeRegister: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  description: string;

  @IsArray()
  @IsEnum(Sector, {
    message: 'Use the corrects activities sectors',
    each: true,
  })
  sector: Sector[];

  @IsMongoId()
  bossId: Types.ObjectId;

  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Id' })
  bakers: Types.ObjectId[];

  @IsNotEmpty()
  @IsEnum(LegalStatus, { message: 'Use a correct legal status' })
  legalStatus: LegalStatus;
}
