import { Inventory } from 'src/inventory/entities/inventory.entity';
import { Sale } from 'src/sale/schemas/sale.schema';

export class CreateClientDto {
  readonly inventories: Inventory[];
  readonly sales: Sale[];
  readonly incomes: number;
  readonly reliquat: number;
  readonly salary: number;
  readonly type: string;
}
