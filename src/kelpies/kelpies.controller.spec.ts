import { Test, TestingModule } from '@nestjs/testing';
import { KelpiesController } from './kelpies.controller';
import { KelpiesService } from './kelpies.service';

describe('KelpiesController', () => {
  let controller: KelpiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KelpiesController],
      providers: [KelpiesService],
    }).compile();

    controller = module.get<KelpiesController>(KelpiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
