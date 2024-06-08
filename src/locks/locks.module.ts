import { Module } from '@nestjs/common';
import { LocksService } from './locks.service';
import { LocksController } from './locks.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Lock } from './entities/lock.entity';
import { ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Lock] })],
  controllers: [LocksController],
  providers: [
    LocksService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class LocksModule {}
