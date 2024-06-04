import { PartialType } from '@nestjs/mapped-types';
import { CreateRestaurantDto } from './create-restaurant.dto';
import { IsNumber, IsString } from 'class-validator';

export class UpdateRestaurantDto extends PartialType(CreateRestaurantDto) {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  address: string;

  @IsNumber()
  reservations: number;

  @IsNumber()
  userId: number;
}
