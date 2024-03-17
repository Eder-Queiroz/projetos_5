import { Module } from '@nestjs/common';
import { LocksService } from './locks.service';
import { LocksController } from './locks.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Lock } from './entities/lock.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Lock] })],
  controllers: [LocksController],
  providers: [LocksService],
})
export class LocksModule {}
