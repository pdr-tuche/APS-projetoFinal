import { Module } from '@nestjs/common';
import { ScheduleService } from './schedules.service';
import { ScheduleController } from './schedules.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ScheduleService],
  controllers: [ScheduleController],
  exports: [ScheduleService],
})
export class SchedulesModule {}
