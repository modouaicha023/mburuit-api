import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  // UseGuards,
} from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
// import { AuthGuard } from '@nestjs/passport';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  @Post()
  // @UseGuards(AuthGuard())
  createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.createCompany(createCompanyDto);
  }

  @Get()
  // @UseGuards(AuthGuard())
  getCompanies() {
    return this.companyService.getCompanies();
  }

  @Get(':id')
  // @UseGuards(AuthGuard())
  getCompany(@Param('id') id: string) {
    return this.companyService.getCompany(id);
  }

  @Put(':id')
  // @UseGuards(AuthGuard())
  updateCompany(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto,
  ) {
    return this.companyService.updateCompany(id, updateCompanyDto);
  }

  @Delete(':id')
  // @UseGuards(AuthGuard())
  deleteCompany(@Param('id') id: string) {
    return this.companyService.deleteCompany(id);
  }
}
