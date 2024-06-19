import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';
import { RestaurantResponseDTO } from './dto/restaurant-response.dto';
import { UserWithoutPasswordDTO } from 'src/user/dto/user-without-password.dto';

@Injectable()
export class RestaurantsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    const manager = await this.prisma.user.findUnique({
      where: { id: createRestaurantDto.manager },
    });

    if (!manager) {
      throw new NotFoundException('User not found');
    }

    const data: Prisma.RestaurantCreateInput = {
      ...createRestaurantDto,
      manager: {
        connect: manager,
      },
    };

    const createdRestaurant = await this.prisma.restaurant.create({
      data,
    });

    return new RestaurantResponseDTO(
      createdRestaurant.id,
      createdRestaurant.name,
      createdRestaurant.description,
      createdRestaurant.address,
      createdRestaurant.reservations,
      new UserWithoutPasswordDTO(manager),
    );
  }

  async findAll() {
    const restaurants = await this.prisma.restaurant.findMany({
      include: { manager: true },
    });

    return restaurants.map((restaurant) => {
      return new RestaurantResponseDTO(
        restaurant.id,
        restaurant.name,
        restaurant.description,
        restaurant.address,
        restaurant.reservations,
        new UserWithoutPasswordDTO(restaurant.manager),
      );
    });
  }

  async findOne(id: number) {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id },
      include: { manager: true },
    });

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }

    return new RestaurantResponseDTO(
      restaurant.id,
      restaurant.name,
      restaurant.description,
      restaurant.address,
      restaurant.reservations,
      new UserWithoutPasswordDTO(restaurant.manager),
    );
  }

  async update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id },
    });

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }

    const data: Prisma.RestaurantUpdateInput = {
      name: updateRestaurantDto.name ?? restaurant.name,
      description: updateRestaurantDto.description ?? restaurant.description,
      address: updateRestaurantDto.address ?? restaurant.address,
      reservations: updateRestaurantDto.reservations ?? restaurant.reservations,
      manager: {
        connect: { id: updateRestaurantDto.userId ?? restaurant.UserId },
      },
    };

    return await this.prisma.restaurant.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id },
    });

    if (!restaurant) {
      throw new NotFoundException('Restaurant not found');
    }

    this.prisma.restaurant.delete({ where: { id } });
    return true;
  }
}
