import { PickType } from '@nestjs/mapped-types';
import { UserLock } from '../entities/user-lock.entity';

export class CreateUserLockDto extends PickType(UserLock, [
  'lock',
  'user',
  'log',
]) {}
