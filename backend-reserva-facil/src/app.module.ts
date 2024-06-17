import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AuthModule } from './auth/auth.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { RatingsModule } from './ratings/ratings.module';
import { SchedulesModule } from './schedules/schedules.module';
import { IsUniqueEmailConstraint } from './user/dto/decorators/validation/is-unique-email-constraint.validation';

@Module({
  imports: [
    PrismaModule,
    UserModule,
    AuthModule,
    RestaurantsModule,
    RatingsModule,
    SchedulesModule,
  ],
  controllers: [],
  providers: [
    // UserService,
    // colocar autenticacao nas rotas
    /*{
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },*/
    IsUniqueEmailConstraint,
  ],
})
export class AppModule {}
