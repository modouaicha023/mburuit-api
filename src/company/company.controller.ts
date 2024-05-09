import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
  Patch,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    try {
      return this.companyService.createCompany(createCompanyDto);
    } catch (error) {
      throw new BadRequestException(
        `Could not create a company: Error -> ${error.message}`,
      );
    }
  }

  @Get()
  getCompanies() {
    try {
      return this.companyService.getCompanies();
    } catch (error) {
      throw new NotFoundException(
        `Companies not found: Error -> ${error.message}`,
      );
    }
  }

  @Get(':id')
  getCompany(@Param('id') id: string) {
    try {
      return this.companyService.getCompany(id);
    } catch (error) {
      throw new NotFoundException(
        `Company not found: Error -> ${error.message}`,
      );
    }
  }

  @Patch(':id')
  updateCompany(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    try {
      return this.companyService.updateCompany(id, updateCompanyDto);
    } catch (error) {
      throw new NotFoundException(
        `Company not found: Error -> ${error.message}`,
      );
    }
  }

  @Delete(':id')
  deleteCompany(@Param('id') id: string) {
    try {
      return this.companyService.deleteCompany(id);
    } catch (error) {
      throw new NotFoundException(
        `Company not found: Error -> ${error.message}`,
      );
    }
  }
}
