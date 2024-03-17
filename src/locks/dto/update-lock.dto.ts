import { PartialType } from '@nestjs/mapped-types';
import { CreateLockDto } from './create-lock.dto';

export class UpdateLockDto extends PartialType(CreateLockDto) {}
