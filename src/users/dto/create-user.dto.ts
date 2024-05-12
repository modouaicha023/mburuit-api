import {
  IsArray,
  IsDate,
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Nationality, Sex, UserType } from '../user.enum';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  username: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  password: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  lastname: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  firstname: string;

  @IsNotEmpty()
  @IsString()
  @Transform(({ value }) => value.trim())
  phone: string;

  @IsNotEmpty()
  @IsEnum(UserType, { message: 'Use a correct UserType' })
  userType: UserType;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.trim())
  address: string;

  @IsOptional()
  @Transform(({ value }) => new Date(value), { toClassOnly: true })
  @IsDate()
  dateOfBirthday: Date;

  @IsOptional()
  @IsUrl()
  @Transform(({ value }) => value.trim())
  profileImage: string;

  @IsOptional()
  @IsEnum(Sex, { message: 'Use a correct sex' })
  sex: Sex;

  @IsOptional()
  @IsEnum(Nationality, { message: 'Use a correct Nationality' })
  nationality: Nationality;
}
