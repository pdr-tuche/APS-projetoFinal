import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthModule } from './auth/auth.module';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [PrismaModule, UserModule, AuthModule, RestaurantsModule],
  controllers: [],
  providers: [
    UserService,
    // colocar autenticacao nas rotas
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
