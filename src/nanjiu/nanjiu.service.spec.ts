import { Test, TestingModule } from '@nestjs/testing';
import { NanjiuService } from './nanjiu.service';

describe('NanjiuService', () => {
  let service: NanjiuService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NanjiuService],
    }).compile();

    service = module.get<NanjiuService>(NanjiuService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
