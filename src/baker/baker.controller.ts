import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { BakerService } from './baker.service';
import { CreateBakerDto } from './dto/create-baker.dto';
import { UpdateBakerDto } from './dto/update-baker.dto';

@Controller('baker')
export class BakerController {
  constructor(private readonly bakerService: BakerService) {}

  @Post()
  createBaker(@Body() createBakerDto: CreateBakerDto) {
    try {
      return this.bakerService.createBaker(createBakerDto);
    } catch (error) {
      throw new BadRequestException(
        `Could not create a baker: Error -> ${error.message}`,
      );
    }
  }

  @Get()
  getBakers() {
    try {
      return this.bakerService.getBakers();
    } catch (error) {
      throw new NotFoundException(
        `Bakers not found: Error -> ${error.message}`,
      );
    }
  }

  @Get(':id')
  getBaker(@Param('id') id: string) {
    try {
      return this.bakerService.getBaker(id);
    } catch (error) {
      throw new NotFoundException(`Baker not found: Error -> ${error.message}`);
    }
  }

  @Patch(':id')
  updateBaker(@Param('id') id: string, @Body() updateBakerDto: UpdateBakerDto) {
    try {
      return this.bakerService.updateBaker(id, updateBakerDto);
    } catch (error) {
      throw new NotFoundException(`Baker not found: Error -> ${error.message}`);
    }
  }

  @Delete(':id')
  deleteBaker(@Param('id') id: string) {
    try {
      return this.bakerService.deleteBaker(id);
    } catch (error) {
      throw new NotFoundException(`Baker not found: Error -> ${error.message}`);
    }
  }
}
