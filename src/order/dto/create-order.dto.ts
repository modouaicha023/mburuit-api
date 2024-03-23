import { Client } from "src/client/entities/client.entity";
export class CreateOrderDto {
  readonly date: Date | undefined;
  readonly unitPrice: number | undefined;
  readonly numberProducts: number | undefined;
  readonly totalPrice: number | undefined;
  readonly client: Client | undefined;
  readonly type: string | undefined;
}