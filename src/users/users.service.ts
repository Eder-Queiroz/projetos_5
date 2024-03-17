import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EntityRepository } from '@mikro-orm/core';
import { User } from './entities/user.entity';
import { InjectRepository } from '@mikro-orm/nestjs';
import { UsersProvider } from './users.provider';
import axios from 'axios';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: EntityRepository<User>,
    private readonly userProvider: UsersProvider,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);
    this.userProvider.stayUserInfo(user);

    try {
      await axios.get('http://localhost:3000/users/rfid/a2b5');

      return user;
    } catch (error) {
      this.userProvider.clearUserInfo();
      throw new HttpException('rfid not found', 500);
    }
  }

  async addRfIdInUser(rfId: string) {
    this.userProvider.setRfId(rfId);
    const user = this.userProvider.getUserInfo();

    await this.userRepository.insert(user);
    this.userProvider.clearUserInfo();
    return user;
  }

  async findAll() {
    return await this.userRepository.findAll();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne(id);
  }

  async findByRfId(rfId: string) {
    return await this.userRepository.findOne({ rfId });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.nativeUpdate({ id }, updateUserDto);
  }

  async remove(id: number) {
    return await this.userRepository.nativeDelete({ id });
  }
}
