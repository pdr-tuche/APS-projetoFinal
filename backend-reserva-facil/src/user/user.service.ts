import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserWithoutPasswordDTO } from './dto/user-without-password.dto';
import { User } from './entities/user.entity';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserWithRestaurantsWithoutPasswordDTO } from './dto/user-with-restaurants-without-password.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto): Promise<UserWithoutPasswordDTO> {
    const data: User = {
      ...createUserDto,
      password: await bcrypt.hash(createUserDto.password, 10),
    };

    await this.prisma.user.create({ data });

    return new UserWithoutPasswordDTO(data);
  }

  findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findAll() {
    return await this.prisma.user.findMany({ include: { restaurants: true } });
  }

  async findById(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { restaurants: true },
    });

    return new UserWithRestaurantsWithoutPasswordDTO(user);
  }

  async update(id: number, newUser: UpdateUserDto) {
    const data: Prisma.UserUpdateInput = {
      ...newUser,
    };

    const updatedUser = await this.prisma.user.update({
      where: { id },
      data,
    });

    return new UserWithoutPasswordDTO(updatedUser);
  }

  async delete(id: number) {
    await this.prisma.user.delete({ where: { id } });
    return true;
  }
}
