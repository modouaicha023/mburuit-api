import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const res = await this.productModel.create(createProductDto);
    return res;
  }

  async getProducts(): Promise<Product[]> {
    const allProducts = await this.productModel.find();
    return allProducts;
  }

  async getProduct(id: string): Promise<Product> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const product = await this.productModel.findById(id);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }

  async updateProduct(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const product = await this.productModel.findByIdAndUpdate(
      id,
      updateProductDto,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }

  async deleteProduct(id: string): Promise<Product> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const product = await this.productModel.findByIdAndDelete(id);
    if (!product) {
      throw new NotFoundException('product not found');
    }
    return product;
  }
}
