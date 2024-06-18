import { Restaurant } from '@prisma/client';
import { User } from '../entities/user.entity';

export class UserWithRestaurantsWithoutPasswordDTO {
  id: number;
  email: string;
  name: string;
  role: string;
  restaurants: Restaurant[];

  constructor(user: any) {
    console.log(user);
    this.id = user.id;
    this.email = user.email;
    this.name = user.name;
    this.role = user.role;
    this.restaurants = user.restaurants
      ? Object.assign([], user.restaurants)
      : [];
  }
}
