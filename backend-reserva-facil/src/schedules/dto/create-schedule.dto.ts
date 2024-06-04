import { IsNumber, IsString } from 'class-validator';

export class CreateScheduleDto {
  @IsString()
  day: string;
  @IsString()
  checkIn: string;
  @IsString()
  checkOut: string;
  @IsNumber()
  restaurantId: number;
  @IsNumber()
  userId: number;
}
