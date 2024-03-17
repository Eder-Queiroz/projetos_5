import { Module } from '@nestjs/common';
import { UserLockService } from './user-lock.service';
import { UserLockController } from './user-lock.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { UserLock } from './entities/user-lock.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [UserLock] })],
  controllers: [UserLockController],
  providers: [UserLockService],
  exports: [UserLockModule],
})
export class UserLockModule {}
