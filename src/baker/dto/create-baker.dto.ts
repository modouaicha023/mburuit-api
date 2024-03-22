import { Client } from 'src/client/entities/client.entity';
import { Company } from 'src/company/schemas/company.schema';
import { Employee } from 'src/employee/entities/employee.entity';
import { Store } from 'src/store/schemas/store.schema';
import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';
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
  readonly employees: Employee[];

  @IsNotEmpty()
  readonly manager: Employee;

  @IsArray()
  readonly clients: Client[];

  @IsNotEmpty()
  @IsArray()
  readonly stores: Store[];

  @IsNotEmpty()
  readonly company: Company;
}
