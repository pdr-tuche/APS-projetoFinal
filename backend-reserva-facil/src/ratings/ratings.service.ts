import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRatingDto } from './dto/create-rating.dto';
import { UpdateRatingDto } from './dto/update-rating.dto';
import { Rating } from './entities/rating.entity';

@Injectable()
export class RatingsService {
  constructor(private prisma: PrismaService) {}

  async create(createRatingDto: CreateRatingDto): Promise<Rating> {
    return await this.prisma.ratings.create({
      data: createRatingDto,
    });
  }

  async findAll(): Promise<Rating[]> {
    return await this.prisma.ratings.findMany({
      include: { user: true, restaurant: true },
    });
  }

  async findOne(id: number): Promise<Rating> {
    return await this.prisma.ratings.findUnique({
      where: { id },
      include: { user: true, restaurant: true },
    });
  }

  async update(id: number, updateRatingDto: UpdateRatingDto): Promise<Rating> {
    return await this.prisma.ratings.update({
      where: { id },
      data: updateRatingDto,
    });
  }

  async remove(id: number): Promise<Rating> {
    return this.prisma.ratings.delete({
      where: { id },
    });
  }
}
