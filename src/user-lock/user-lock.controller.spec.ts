import { Test, TestingModule } from '@nestjs/testing';
import { UserLockController } from './user-lock.controller';
import { UserLockService } from './user-lock.service';

describe('UserLockController', () => {
  let controller: UserLockController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserLockController],
      providers: [UserLockService],
    }).compile();

    controller = module.get<UserLockController>(UserLockController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
