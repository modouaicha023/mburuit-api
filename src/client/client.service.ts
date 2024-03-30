import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Client } from './schemas/client.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name)
    private clientModel: Model<Client>,
  ) {}

  async createClient(createClientDto: CreateClientDto): Promise<Client> {
    const res = await this.clientModel.create(createClientDto);
    return res;
  }

  async getClients(): Promise<Client[]> {
    const allClients = await this.clientModel.find();
    return allClients;
  }

  async getClient(id: string): Promise<Client> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const client = await this.clientModel.findById(id);
    if (!client) {
      throw new NotFoundException('client not found');
    }
    return client;
  }

  async updateClient(
    id: string,
    updateClientDto: UpdateClientDto,
  ): Promise<Client> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const client = await this.clientModel.findByIdAndUpdate(
      id,
      updateClientDto,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!client) {
      throw new NotFoundException('client not found');
    }
    return client;
  }

  async deleteClient(id: string): Promise<Client> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const client = await this.clientModel.findByIdAndDelete(id);
    if (!client) {
      throw new NotFoundException('client not found');
    }
    return client;
  }
}
