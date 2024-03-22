import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBakerDto } from './dto/create-baker.dto';
import { UpdateBakerDto } from './dto/update-baker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Baker } from './schemas/baker.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class BakerService {
  constructor(
    @InjectModel(Baker.name)
    private bakerModel: Model<Baker>,
  ) {}

  async createBaker(createBakerDto: CreateBakerDto): Promise<Baker> {
    const res = await this.bakerModel.create(createBakerDto);
    return res;
  }

  async getBakers(): Promise<Baker[]> {
    const allBakers = await this.bakerModel.find();
    return allBakers;
  }

  async getBaker(id: string): Promise<Baker> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const baker = await this.bakerModel.findById(id);
    if (!baker) {
      throw new NotFoundException('baker not found');
    }
    return baker;
  }

  async updateBaker(
    id: string,
    updateBakerDto: UpdateBakerDto,
  ): Promise<Baker> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const baker = await this.bakerModel.findByIdAndUpdate(id, updateBakerDto, {
      new: true,
      runValidators: true,
    });
    if (!baker) {
      throw new NotFoundException('baker not found');
    }
    return baker;
  }

  async deleteBaker(id: string) {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const baker = await this.bakerModel.findByIdAndDelete(id);
    if (!baker) {
      throw new NotFoundException('baker not found');
    }
    return baker;
  }
}
