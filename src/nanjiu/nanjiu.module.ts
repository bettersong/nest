import { Module } from '@nestjs/common';
import { NanjiuService } from './nanjiu.service';
import { NanjiuController } from './nanjiu.controller';

@Module({
  controllers: [NanjiuController],
  providers: [NanjiuService]
})
export class NanjiuModule {}
