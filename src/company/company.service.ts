import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './schemas/company.schema';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private companyModel: Model<Company>,
  ) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const res = await this.companyModel.create(createCompanyDto);
    return res;
  }

  async getCompanies(): Promise<Company[]> {
    const allCompanies = await this.companyModel.find();
    return allCompanies;
  }

  async getCompany(id: string): Promise<Company> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const company = await this.companyModel.findById(id);
    if (!company) {
      throw new NotFoundException('company not found');
    }
    return company;
  }

  async updateCompany(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const company = await this.companyModel.findByIdAndUpdate(
      id,
      updateCompanyDto,
      {
        new: true,
        runValidators: true,
      },
    );
    if (!company) {
      throw new NotFoundException('company not found');
    }
    return company;
  }

  async deleteCompany(id: string): Promise<Company> {
    const isValidId = mongoose.isValidObjectId(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a correct Id');
    }
    const company = await this.companyModel.findByIdAndDelete(id);
    if (!company) {
      throw new NotFoundException('company not found');
    }
    return company;
  }
}
