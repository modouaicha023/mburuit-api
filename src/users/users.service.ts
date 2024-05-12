import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model, Types } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<{ message: string }> {
    const saltOrRounds = 10;
    try {
      const hashedPassword = bcrypt.hashSync(
        createUserDto.password,
        saltOrRounds,
      );
      createUserDto.password = hashedPassword;
      const res = await this.userModel.create(createUserDto);
      return { message: 'User created successfully' };
    } catch (error) {
      throw new BadRequestException('Could not create User');
    }
  }

  async getUsers(): Promise<User[]> {
    try {
      const allUsers = await this.userModel.find().select('-password');
      return allUsers;
    } catch (error) {
      throw new NotFoundException('Users not found');
    }
  }

  async getUser(id: string): Promise<User> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Please enter a correct Id');
    }
    try {
      const User = await this.userModel.findById(id).select('-password');
      if (!User) {
        throw new NotFoundException('User not found');
      }
      return User;
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async updateUser(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<{ message: string }> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Please enter a correct Id');
    }

    try {
      const updatedUser = await this.userModel.findByIdAndUpdate(
        id,
        updateUserDto,
        {
          new: true,
          runValidators: true,
        },
      );

      if (!updatedUser) {
        throw new NotFoundException('User not found');
      }

      return { message: 'User updated successfully' };
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }

  async deleteUser(id: string): Promise<{ message: string }> {
    if (!Types.ObjectId.isValid(id)) {
      throw new BadRequestException('Please enter a correct Id');
    }
    try {
      const user = await this.userModel.findByIdAndDelete(id);
      if (!user) {
        throw new NotFoundException('User not found');
      }
      return { message: 'User deleted successfully' };
    } catch (error) {
      throw new NotFoundException('User not found');
    }
  }
}
