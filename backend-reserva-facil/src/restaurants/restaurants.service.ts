import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RestaurantsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createRestaurantDto: CreateRestaurantDto) {
    const manager = await this.prisma.user.findUnique({
      where: { id: createRestaurantDto.userId },
    });
    console.log(manager);
    if (!manager) {
      throw new Error('User not found');
    }

    const data: Prisma.RestaurantCreateInput = {
      name: createRestaurantDto.name,
      description: createRestaurantDto.description,
      address: createRestaurantDto.address,
      reservations: createRestaurantDto.reservations,
      manager: {
        connect: manager,
      },
    };
    const createdRestaurant = await this.prisma.restaurant.create({
      data,
    });
    return this.prisma.restaurant.findUnique({
      where: { id: createdRestaurant.id },
      include: { manager: true },
    });
  }

  async findAll() {
    return await this.prisma.restaurant.findMany({
      include: { manager: true },
    });
  }

  async findOne(id: number) {
    return await this.prisma.restaurant.findUnique({
      where: { id },
      include: { manager: true },
    });
  }

  async update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    const data: Prisma.RestaurantUpdateInput = {
      name: updateRestaurantDto.name,
      description: updateRestaurantDto.description,
      address: updateRestaurantDto.address,
      reservations: updateRestaurantDto.reservations,
      manager: {
        connect: { id: updateRestaurantDto.userId },
      },
    };

    return await this.prisma.restaurant.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.prisma.restaurant.delete({
      where: { id },
    });
    return true;
  }
}
