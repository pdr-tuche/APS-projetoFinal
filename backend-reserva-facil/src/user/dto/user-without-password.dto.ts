import { User } from '../entities/user.entity';

export class UserWithoutPasswordDTO {
  email: string;
  name: string;
  role: string;

  constructor(user: User) {
    this.email = user.email;
    this.name = user.name;
    this.role = user.role;
  }
}
