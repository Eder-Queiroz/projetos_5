import { Module } from '@nestjs/common';
import { UserLockService } from './user-lock.service';
import { UserLockController } from './user-lock.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserLock } from './entities/user-lock.entity';
import { LogService } from '../log/log.service';
import { Log } from '../log/entities/log.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [UserLock, Log] })],
  controllers: [UserLockController],
  providers: [UserLockService, LogService],
  exports: [UserLockModule],
})
export class UserLockModule {}
