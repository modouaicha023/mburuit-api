import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  createStore(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.createStore(createStoreDto);
  }

  @Get()
  GetStores() {
    return this.storeService.GetStores();
  }

  @Get(':id')
  GetStore(@Param('id') id: string) {
    return this.storeService.GetStore(id);
  }

  @Patch(':id')
  updateStore(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.updateStore(id, updateStoreDto);
  }

  @Delete(':id')
  deleteStore(@Param('id') id: string) {
    return this.storeService.deleteStore(id);
  }
}
