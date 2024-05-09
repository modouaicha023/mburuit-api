import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
   Patch,
} from '@nestjs/common';
import { SaleService } from './sale.service';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';

@Controller('sale')
export class SaleController {
  constructor(private readonly saleService: SaleService) {}

  @Post()
  createSale(@Body() createSaleDto: CreateSaleDto) {
    return this.saleService.createSale(createSaleDto);
  }

  @Get()
  getSales() {
    return this.saleService.getSales();
  }

  @Get(':id')
  getSale(@Param('id') id: string) {
    return this.saleService.getSale(id);
  }

  @Patch(':id')
  updateSale(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
    return this.saleService.updateSale(id, updateSaleDto);
  }

  @Delete(':id')
  deleteSale(@Param('id') id: string) {
    return this.saleService.deleteSale(id);
  }
}
