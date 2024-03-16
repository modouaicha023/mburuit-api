import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { Baker } from 'src/baker/entities/baker.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Sector, LegalStatus } from '../company.enum';
export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
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
  @IsArray()
  readonly employees: Employee[];

  @IsOptional()
  @IsArray()
  readonly bakers: Baker[];

  @IsOptional()
  @IsEnum(LegalStatus, { message: 'Use a correct legal status' })
  readonly legalStatus: LegalStatus;
}
