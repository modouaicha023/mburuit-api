import {
  IsArray,
  IsEmail,
  IsEnum,
  IsMongoId,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { Sector, LegalStatus } from '../company.enum';
import { Types } from 'mongoose';
import { Transform } from 'class-transformer';

export class CreateCompanyDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  name: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  ninea: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  address: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  tradeRegister: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  phone: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  logo: string;

  @IsOptional()
  @IsEnum(Sector, {
    message: 'Use the corrects activities sectors',
    each: true,
  })
  sector: Sector;

  @IsNotEmpty()
  @IsMongoId()
  bossId: Types.ObjectId;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Id' })
  bakers: Types.ObjectId[];

  @IsOptional()
  @IsEnum(LegalStatus, { message: 'Use a correct legal status' })
  legalStatus: LegalStatus;
}
