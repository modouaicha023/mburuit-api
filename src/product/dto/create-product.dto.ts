import { IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly unitPrice: number;

  @IsNotEmpty()
  readonly description: string;

  @IsNotEmpty()
  readonly weight: string;

  @IsNotEmpty()
  readonly quantityUnit: string;
}
