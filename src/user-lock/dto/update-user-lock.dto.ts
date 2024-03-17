import { PartialType } from '@nestjs/mapped-types';
import { CreateUserLockDto } from './create-user-lock.dto';

export class UpdateUserLockDto extends PartialType(CreateUserLockDto) {}
