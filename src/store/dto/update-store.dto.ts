import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';
import {
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Employee } from 'src/employee/entities/employee.entity';
import { Baker } from 'src/baker/schemas/baker.schema';

export class UpdateStoreDto extends PartialType(CreateStoreDto) {
  @IsOptional()
  @IsString()
  readonly name: string;

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
  @IsNumber()
  readonly Capacity: number;
  
  @IsOptional()
  @IsArray()
  readonly seller: Employee[];

  @IsOptional()
  readonly baker: Baker;
}
