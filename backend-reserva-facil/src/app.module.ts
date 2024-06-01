import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [PrismaModule, UserModule],
  controllers: [UserModule],
  providers: [UserService],
})
export class AppModule {}
