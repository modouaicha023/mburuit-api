import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { Sale } from './schemas/sale.schema';

@Injectable()
export class SaleService {
  constructor(
    @InjectModel(Sale.name)
    private saleModel: Model<Sale>,
  ) {}

  async createSale(createSaleDto: CreateSaleDto): Promise<Sale> {
    const res = await this.saleModel.create(createSaleDto);
    return res;
  }

  async getSales(): Promise<Sale[]> {
    const allCompanies = await this.saleModel.find();
    return allCompanies;
  }

  async getSale(id: string): Promise<Sale> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const sale = await this.saleModel.findById(id);
    if (!sale) {
      throw new NotFoundException('sale not found');
    }
    return sale;
  }

  async updateSale(id: string, updateSaleDto: UpdateSaleDto): Promise<Sale> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const sale = await this.saleModel.findByIdAndUpdate(id, updateSaleDto, {
      new: true,
      runValidators: true,
    });
    if (!sale) {
      throw new NotFoundException('sale not found');
    }
    return sale;
  }

  async deleteSale(id: string): Promise<Sale> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const sale = await this.saleModel.findByIdAndDelete(id);
    if (!sale) {
      throw new NotFoundException('sale not found');
    }
    return sale;
  }
}
