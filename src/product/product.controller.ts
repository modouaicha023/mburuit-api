import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard())
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productService.createProduct(createProductDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  getProduct(@Param('id') id: string) {
    return this.productService.getProduct(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productService.updateProduct(id, updateProductDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  deleteProduct(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
