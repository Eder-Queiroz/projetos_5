import { Injectable } from '@nestjs/common';
import { CreateLogDto } from './dto/create-log.dto';
import { UpdateLogDto } from './dto/update-log.dto';
import { InjectRepository } from '@mikro-orm/nestjs';
import { Log } from './entities/log.entity';
import { EntityRepository } from '@mikro-orm/core';

@Injectable()
export class LogService {
  constructor(
    @InjectRepository(Log)
    private readonly logRepository: EntityRepository<Log>,
  ) {}

  async create(createLogDto: CreateLogDto) {
    const log = this.logRepository.create(createLogDto);
    await this.logRepository.insert(log);
    return log;
  }

  async findAll() {
    return await this.logRepository.findAll();
  }

  async findOne(id: number) {
    return await this.logRepository.findOne(id);
  }

  async update(id: number, updateLogDto: UpdateLogDto) {
    return await this.logRepository.nativeUpdate({ id }, updateLogDto);
  }

  async remove(id: number) {
    return await this.logRepository.nativeDelete({ id });
  }
}
