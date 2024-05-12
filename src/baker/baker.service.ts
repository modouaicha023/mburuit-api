import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateBakerDto } from './dto/create-baker.dto';
import { UpdateBakerDto } from './dto/update-baker.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Baker } from './schemas/baker.schema';
import mongoose, { Model, Types } from 'mongoose';

@Injectable()
export class BakerService {
  constructor(
    @InjectModel(Baker.name)
    private bakerModel: Model<Baker>,
  ) {}

  async createBaker(
    createBakerDto: CreateBakerDto,
  ): Promise<{ message: string }> {
    try {
      const res = await this.bakerModel.create(createBakerDto);
      return { message: 'Baker created successfully' };
    } catch (error) {
      throw new BadRequestException('Could not create baker');
    }
  }

  async getBakers(): Promise<Baker[]> {
    try {
      const allBakers = await this.bakerModel.find();
      return allBakers;
    } catch (error) {
      throw new NotFoundException('Bakers not found');
    }
  }

  async getBaker(id: string): Promise<Baker> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Please enter a correct Id');
    }
    try {
      const baker = await this.bakerModel.findById(id);
      if (!baker) {
        throw new NotFoundException('baker not found');
      }
      return baker;
    } catch (error) {
      throw new NotFoundException('baker not found');
    }
  }

  async updateBaker(
    id: string,
    updateBakerDto: UpdateBakerDto,
  ): Promise<{ message: string }> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Please enter a correct Id');
    }
    try {
      const baker = await this.bakerModel.findByIdAndUpdate(
        id,
        updateBakerDto,
        {
          new: true,
          runValidators: true,
        },
      );
      if (!baker) {
        throw new NotFoundException('baker not found');
      }
      return { message: 'Baker updated successfully' };
    } catch (error) {
      throw new NotFoundException('baker not found');
    }
  }

  async deleteBaker(id: string): Promise<{ message: string }> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    try {
      const baker = await this.bakerModel.findByIdAndDelete(id);
      if (!baker) {
        throw new NotFoundException('baker not found');
      }
      return { message: 'Baker deleted successfully' };
    } catch (error) {
      throw new NotFoundException('baker not found');
    }
  }
}
