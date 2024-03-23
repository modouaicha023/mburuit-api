import {
  IsArray,
  IsEmail,
  IsEnum,
  IsMongoId,
  IsOptional,
  IsString,
} from 'class-validator';
import { Sector, LegalStatus } from '../company.enum';
import { Types } from 'mongoose';
export class UpdateCompanyDto  {
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
  readonly tradeRegister: string;

  @IsOptional()
  @IsString()
  readonly phone: string;

  @IsOptional()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsString()
  readonly description: string;

  @IsOptional()
  @IsArray()
  @IsEnum(Sector, { message: 'Use a correct activity sectory' })
  readonly sector: Sector[];

  @IsOptional()
  @IsMongoId()
  readonly bossId: Types.ObjectId;

  @IsOptional()
  @IsArray()
  @IsMongoId({ each: true, message: 'Bad Id' })
  readonly bakersIds: Types.ObjectId[];

  @IsOptional()
  @IsEnum(LegalStatus, { message: 'Use a correct legal status' })
  readonly legalStatus: LegalStatus;
}
