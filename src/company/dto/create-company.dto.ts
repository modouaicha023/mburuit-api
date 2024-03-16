import {
  IsArray,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Baker } from 'src/baker/entities/baker.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { Sector, LegalStatus } from '../company.enum';

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
  @IsEnum(Sector, { message: 'Use a correct activity sectory' })
  readonly sector: Sector[];

  @IsArray()
  readonly employees: Employee[];

  @IsArray()
  readonly bakers: Baker[];

  @IsNotEmpty()
  @IsEnum(LegalStatus, { message: 'Use a correct legal status' })
  readonly legalStatus: LegalStatus;
}
