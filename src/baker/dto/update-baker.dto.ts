import { PartialType } from '@nestjs/mapped-types';
import { CreateBakerDto } from './create-baker.dto';
import { Client } from 'src/client/entities/client.entity';
import { Company } from 'src/company/schemas/company.schema';
import { Employee } from 'src/employee/entities/employee.entity';
import { Store } from 'src/store/schemas/store.entity';
import { IsArray, IsEmail, IsOptional, IsString } from 'class-validator';

export class UpdateBakerDto extends PartialType(CreateBakerDto) {
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
  readonly employees: Employee[];

  @IsOptional()
  readonly manager: Employee;

  @IsOptional()
  @IsArray()
  readonly clients: Client[];

  @IsOptional()
  @IsArray()
  readonly stores: Store[];

  @IsOptional()
  readonly company: Company;
}
