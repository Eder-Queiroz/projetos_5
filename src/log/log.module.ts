import { Module } from '@nestjs/common';
import { LogService } from './log.service';
import { LogController } from './log.controller';
import { MikroOrmModule } from '@mikro-orm/nestjs';
import { Log } from './entities/log.entity';

@Module({
  imports: [MikroOrmModule.forFeature({ entities: [Log] })],
  controllers: [LogController],
  providers: [LogService],
})
export class LogModule {}
