import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogController } from './log.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Log } from './entities/log.entity';
import { ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Log] })],
  controllers: [LogController],
  providers: [
    LogService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class LogModule {}
