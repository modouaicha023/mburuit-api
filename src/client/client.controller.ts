import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Post()
  createClient(@Body() createClientDto: CreateClientDto) {
    return this.clientService.createClient(createClientDto);
  }

  @Get()
  getClients() {
    return this.clientService.getClients();
  }

  @Get(':id')
  getClient(@Param('id') id: string) {
    return this.clientService.getClient(id);
  }

  @Patch(':id')
  updateClient(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientService.updateClient(id, updateClientDto);
  }

  @Delete(':id')
  deleteClient(@Param('id') id: string) {
    return this.clientService.deleteClient(id);
  }
}
