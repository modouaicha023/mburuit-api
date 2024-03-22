import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsOptional } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  @IsOptional()
  readonly name: string;

  @IsOptional()
  readonly unitPrice: number;

  @IsOptional()
  readonly description: string;

  @IsOptional()
  readonly weight: string;

  @IsOptional()
  readonly quantityUnit: string;
}
