import { Test, TestingModule } from '@nestjs/testing';
import { KelpiesService } from './kelpies.service';

describe('KelpiesService', () => {
  let service: KelpiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KelpiesService],
    }).compile();

    service = module.get<KelpiesService>(KelpiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
