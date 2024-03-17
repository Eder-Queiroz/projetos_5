import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LocksService } from './locks.service';
import { CreateLockDto } from './dto/create-lock.dto';
import { UpdateLockDto } from './dto/update-lock.dto';

@Controller('locks')
export class LocksController {
  constructor(private readonly locksService: LocksService) {}

  @Post()
  create(@Body() createLockDto: CreateLockDto) {
    return this.locksService.create(createLockDto);
  }

  @Get()
  findAll() {
    return this.locksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.locksService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLockDto: UpdateLockDto) {
    return this.locksService.update(+id, updateLockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.locksService.remove(+id);
  }
}
