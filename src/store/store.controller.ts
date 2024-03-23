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
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  @UseGuards(AuthGuard())
  createStore(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.createStore(createStoreDto);
  }

  @Get()
  @UseGuards(AuthGuard())
  GetStores() {
    return this.storeService.GetStores();
  }

  @Get(':id')
  @UseGuards(AuthGuard())
  GetStore(@Param('id') id: string) {
    return this.storeService.GetStore(id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard())
  updateStore(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.updateStore(id, updateStoreDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard())
  deleteStore(@Param('id') id: string) {
    return this.storeService.deleteStore(id);
  }
}
