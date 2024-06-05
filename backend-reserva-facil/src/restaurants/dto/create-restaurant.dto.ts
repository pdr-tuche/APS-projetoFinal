import { IsNumber, IsString } from 'class-validator';

export class CreateRestaurantDto {
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
