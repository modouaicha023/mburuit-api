import {
  IsArray,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
} from 'class-validator';
import { Baker } from 'src/baker/schemas/baker.schema';
import { Employee } from 'src/employee/entities/employee.entity';

export class CreateStoreDto {
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

  @IsNotEmpty()
  @IsNumber()
  readonly Capacity: number;

  @IsArray()
  readonly seller: Employee[];

  @IsNotEmpty()
  readonly baker: Baker;
}
