import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserLockService } from './user-lock.service';
import { CreateUserLockDto } from './dto/create-user-lock.dto';
import { UpdateUserLockDto } from './dto/update-user-lock.dto';

@Controller('user-lock')
export class UserLockController {
  constructor(private readonly userLockService: UserLockService) {}

  @Post()
  create(@Body() createUserLockDto: CreateUserLockDto) {
    return this.userLockService.create(createUserLockDto);
  }

  @Get()
  findAll() {
    return this.userLockService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userLockService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateUserLockDto: UpdateUserLockDto,
  ) {
    return this.userLockService.update(+id, updateUserLockDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userLockService.remove(+id);
  }

  @Post('/unlock')
  unlock(@Body('rfId') rfId: string, @Body('lockId') lockId: string) {
    return this.userLockService.unlock(rfId, +lockId);
  }
}
