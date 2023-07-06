import { Test, TestingModule } from '@nestjs/testing';
import { NanjiuController } from './nanjiu.controller';
import { NanjiuService } from './nanjiu.service';

describe('NanjiuController', () => {
  let controller: NanjiuController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NanjiuController],
      providers: [NanjiuService],
    }).compile();

    controller = module.get<NanjiuController>(NanjiuController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
