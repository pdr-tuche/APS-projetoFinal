import { UserWithoutPasswordDTO } from 'src/user/dto/user-without-password.dto';

export class RestaurantResponseDTO {
  id: number;
  name: string;
  description: string;
  address: string;
  reservations: number;
  manager: UserWithoutPasswordDTO;

  constructor(
    id: number,
    name: string,
    description: string,
    address: string,
    reservations: number,
    manager: UserWithoutPasswordDTO,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.address = address;
    this.reservations = reservations;
    this.manager = manager;
  }
}
