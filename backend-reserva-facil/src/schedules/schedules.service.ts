import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ScheduleService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateScheduleDto) {
    const restaurant = await this.prisma.restaurant.findUnique({
      where: { id: data.restaurantId },
    });

    if (!restaurant) {
      throw new Error('Restaurant not found');
    }

    if (restaurant.reservations <= 0) {
      throw new Error('Restaurant is full');
    }

    await this.prisma.restaurant.update({
      where: { id: data.restaurantId },
      data: { reservations: { decrement: 1 } },
    });

    return await this.prisma.schedule.create({ data });
  }

  async findAll() {
    return await this.prisma.schedule.findMany({
      include: { restaurant: true, user: true },
    });
  }

  async findOne(id: number) {
    return await this.prisma.schedule.findUnique({
      where: { id },
      include: { restaurant: true, user: true },
    });
  }

  async update(id: number, data: UpdateScheduleDto) {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      throw new Error('Schedule not found');
    }

    if (data.restaurantId && data.restaurantId != schedule.restaurantId) {
      const restaurant = await this.prisma.restaurant.findUnique({
        where: { id: data.restaurantId },
      });

      if (!restaurant) {
        throw new Error('Restaurant not found');
      }

      if (restaurant.reservations <= 0) {
        throw new Error('Restaurant is full');
      }

      await this.prisma.restaurant.update({
        where: { id: data.restaurantId },
        data: { reservations: { decrement: 1 } },
      });

      await this.prisma.restaurant.update({
        where: { id: schedule.restaurantId },
        data: { reservations: { increment: 1 } },
      });
    }

    return await this.prisma.schedule.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    const schedule = await this.prisma.schedule.findUnique({
      where: { id },
    });

    if (!schedule) {
      throw new Error('Schedule not found');
    }

    await this.prisma.restaurant.update({
      where: { id: schedule.restaurantId },
      data: { reservations: { increment: 1 } },
    });

    return await this.prisma.schedule.delete({ where: { id } });
  }
}
