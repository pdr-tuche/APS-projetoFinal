// Custom validator for role
import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { PrismaService } from 'src/prisma/prisma.service';

@ValidatorConstraint({ async: true })
@Injectable()
export class IsUniqueEmailConstraint implements ValidatorConstraintInterface {
  constructor(private readonly prisma: PrismaService) {}

  async validate(email: any, args: ValidationArguments) {
    const user = await this.prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user ? false : true;
  }

  defaultMessage(args: ValidationArguments) {
    return 'Email already exists';
  }
}
