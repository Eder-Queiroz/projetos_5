import { Injectable } from '@nestjs/common';
import { CreateLockDto } from './dto/create-lock.dto';
import { UpdateLockDto } from './dto/update-lock.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { EntityRepository } from '@mikro-orm/core';
import { Lock } from './entities/lock.entity';

@Injectable()
export class LocksService {
  constructor(
    @InjectRepository(Lock)
    private readonly lockRepository: EntityRepository<Lock>,
  ) {}

  async create(createLockDto: CreateLockDto) {
    const lock = this.lockRepository.create(createLockDto);
    await this.lockRepository.insert(lock);
    return lock;
  }

  async findAll() {
    return await this.lockRepository.findAll();
  }

  async findOne(id: number) {
    return await this.lockRepository.findOne(id);
  }

  async update(id: number, updateLockDto: UpdateLockDto) {
    return await this.lockRepository.nativeUpdate({ id }, updateLockDto);
  }

  async remove(id: number) {
    return await this.lockRepository.nativeDelete({ id });
  }
}
