import { Test, TestingModule } from '@nestjs/testing';
import { LocksController } from './locks.controller';
import { LocksService } from './locks.service';

describe('LocksController', () => {
  let controller: LocksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocksController],
      providers: [LocksService],
    }).compile();

    controller = module.get<LocksController>(LocksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
