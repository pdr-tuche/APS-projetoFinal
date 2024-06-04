import { User } from 'src/user/entities/user.entity';

export class Restaurant {
  id?: number;
  name: string;
  description: string;
  address: string;
  reservations: number;
  UserId?: number;
  manager?: User;
}
