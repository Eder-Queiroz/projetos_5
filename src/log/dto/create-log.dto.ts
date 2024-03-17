import { PickType } from '@nestjs/mapped-types';
import { Log } from '../entities/log.entity';

export class CreateLogDto extends PickType(Log, [
  'userLock',
  'createdAt',
  'updatedAt',
]) {}
