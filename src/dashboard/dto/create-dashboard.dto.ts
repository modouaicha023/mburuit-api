import { Inventory } from "src/inventory/entities/inventory.entity";
import { Sale } from "src/sale/entities/sale.entity";

export class CreateDashboardDto {
    readonly inventories: Inventory[] | undefined;
    readonly sales: Sale[] | undefined;
    
}
