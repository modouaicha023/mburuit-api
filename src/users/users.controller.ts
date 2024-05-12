import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    try {
      return this.userService.createUser(createUserDto);
    } catch (error) {
      throw new BadRequestException(
        `Could not create a User: Error -> ${error.message}`,
      );
    }
  }

  @Get()
  getUsers() {
    try {
      return this.userService.getUsers();
    } catch (error) {
      throw new NotFoundException(`Users not found: Error -> ${error.message}`);
    }
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    try {
      return this.userService.getUser(id);
    } catch (error) {
      throw new NotFoundException(`User not found: Error -> ${error.message}`);
    }
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    try {
      return this.userService.updateUser(id, updateUserDto);
    } catch (error) {
      throw new NotFoundException(`User not found: Error -> ${error.message}`);
    }
  }

  @Delete(':id')
  deleteUser(@Param('id') id: string) {
    try {
      return this.userService.deleteUser(id);
    } catch (error) {
      throw new NotFoundException(`User not found: Error -> ${error.message}`);
    }
  }
}
