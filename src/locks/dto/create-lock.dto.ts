import { PickType } from '@nestjs/mapped-types';
import { Lock } from '../entities/lock.entity';

export class CreateLockDto extends PickType(Lock, ['name']) {}
