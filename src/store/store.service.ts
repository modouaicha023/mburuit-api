import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Store } from './schemas/store.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class StoreService {
  constructor(
    @InjectModel(Store.name)
    private storeModel: Model<Store>,
  ) {}
  async createStore(createStoreDto: CreateStoreDto): Promise<Store> {
    const res = await this.storeModel.create(createStoreDto);
    return res;
  }

  async GetStores(): Promise<Store[]> {
    const allStores = await this.storeModel.find();
    return allStores;
  }

  async GetStore(id: string): Promise<Store> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const store = await this.storeModel.findById(id);
    if (!store) {
      throw new NotFoundException('store not found');
    }
    return store;
  }

  async updateStore(
    id: string,
    updateStoreDto: UpdateStoreDto,
  ): Promise<Store> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const store = await this.storeModel.findByIdAndUpdate(id, updateStoreDto, {
      new: true,
      runValidators: true,
    });
    if (!store) {
      throw new NotFoundException('store not found');
    }
    return store;
  }

  async deleteStore(id: string): Promise<Store> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const store = await this.storeModel.findByIdAndDelete(id);
    if (!store) {
      throw new NotFoundException('store not found');
    }
    return store;
  }
}
