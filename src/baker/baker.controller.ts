import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { BakerService } from './baker.service';
import { CreateBakerDto } from './dto/create-baker.dto';
import { UpdateBakerDto } from './dto/update-baker.dto';
import { AuthGuard } from '@nestjs/passport';


@Controller('baker')
export class BakerController {
  constructor(private readonly bakerService: BakerService) {}

  @Post()
  @UseGuards(AuthGuard())
  createBaker(@Body() createBakerDto: CreateBakerDto) {
    return this.bakerService.createBaker(createBakerDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  getBakers() {
    return this.bakerService.getBakers();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  getBaker(@Param('id') id: string) {
    return this.bakerService.getBaker(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  updateBaker(@Param('id') id: string, @Body() updateBakerDto: UpdateBakerDto) {
    return this.bakerService.updateBaker(id, updateBakerDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  deleteBaker(@Param('id') id: string) {
    return this.bakerService.deleteBaker(id);
  }
}
