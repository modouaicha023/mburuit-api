import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './schemas/company.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name)
    private companyModel: Model<Company>,
  ) {}

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    try {
      const res = await this.companyModel.create(createCompanyDto);
      return res;
    } catch (error) {
      throw new BadRequestException('Could not create company');
    }
  }

  async getCompanies(): Promise<Company[]> {
    try {
      const allCompanies = await this.companyModel.find();
      return allCompanies;
    } catch (error) {
      throw new NotFoundException('Companies not found');
    }
  }

  async getCompany(id: string): Promise<Company> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Please enter a correct Id');
    }
    try {
      const company = await this.companyModel.findById(id);
      if (!company) {
        throw new NotFoundException('Company not found');
      }
      return company;
    } catch (error) {
      throw new NotFoundException('Company not found');
    }
  }

  async updateCompany(
    id: string,
    updateCompanyDto: UpdateCompanyDto,
  ): Promise<Company> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Please enter a correct Id');
    }
    try {
      const company = await this.companyModel.findByIdAndUpdate(
        id,
        updateCompanyDto,
        {
          new: true,
          runValidators: true,
        },
      );
      if (!company) {
        throw new NotFoundException('Company not found');
      }
      return company;
    } catch (error) {
      throw new NotFoundException('Company not found');
    }
  }

  async deleteCompany(id: string): Promise<Company> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Please enter a correct Id');
    }
    try {
      const company = await this.companyModel.findByIdAndDelete(id);
      if (!company) {
        throw new NotFoundException('Company not found');
      }
      return company;
    } catch (error) {
      throw new NotFoundException('Company not found');
    }
  }
}
