import { Test, TestingModule } from '@nestjs/testing';
import { UserLockService } from './user-lock.service';

describe('UserLockService', () => {
  let service: UserLockService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserLockService],
    }).compile();

    service = module.get<UserLockService>(UserLockService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
