import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { LocksModule } from './locks/locks.module';
import { UsersModule } from './users/users.module';
import { UserLockModule } from './user-lock/user-lock.module';
import { LogModule } from './log/log.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    MikroOrmModule.forRoot(),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    LocksModule,
    UsersModule,
    UserLockModule,
    LogModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
