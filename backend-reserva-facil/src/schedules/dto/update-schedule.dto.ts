import { IsNumber, IsString } from 'class-validator';

export class UpdateScheduleDto {
  @IsString()
  day?: string;
  @IsString()
  checkIn?: string;
  @IsString()
  checkOut?: string;
  @IsNumber()
  restaurantId?: number;
  @IsNumber()
  userId?: number;
}
