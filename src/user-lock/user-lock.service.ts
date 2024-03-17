import { Injectable } from '@nestjs/common';
import { CreateUserLockDto } from './dto/create-user-lock.dto';
import { UpdateUserLockDto } from './dto/update-user-lock.dto';
import { UserLock } from './entities/user-lock.entity';
import { EntityRepository } from '@mikro-orm/core';
import { InjectRepository } from '@mikro-orm/nestjs';

@Injectable()
export class UserLockService {
  constructor(
    @InjectRepository(UserLock)
    private readonly userLockRepository: EntityRepository<UserLock>,
  ) {}

  async create(createUserLockDto: CreateUserLockDto) {
    const userLock = this.userLockRepository.create(createUserLockDto);
    await this.userLockRepository.insert(userLock);
    return userLock;
  }

  async findAll() {
    return this.userLockRepository.findAll();
  }

  async findOne(id: number) {
    return await this.userLockRepository.findOne(id);
  }

  async update(id: number, updateUserLockDto: UpdateUserLockDto) {
    return await this.userLockRepository.nativeUpdate(
      { id },
      updateUserLockDto,
    );
  }

  async remove(id: number) {
    return await this.userLockRepository.nativeDelete({ id });
  }
}
