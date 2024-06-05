import { IsInt, IsString } from 'class-validator';

export class CreateRatingDto {
  @IsInt()
  rating: number;

  @IsString()
  comment: string;

  @IsInt()
  restaurantId: number;

  @IsInt()
  userId: number;
}
