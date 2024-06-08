import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { User } from './entities/user.entity';
import { UsersProvider } from './users.provider';
import { ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [User] })],
  controllers: [UsersController],
  providers: [
    UsersService,
    UsersProvider,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
  exports: [UsersModule],
})
export class UsersModule {}
