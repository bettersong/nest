import { Global, Module } from '@nestjs/common';
import { InfoService } from './info.service';
import { InfoController } from './info.controller';

@Global() // 全局模块
@Module({
  controllers: [InfoController],
  providers: [InfoService], // 提供者
  exports: [InfoService] // 导出 InfoService 供其他模块使用
})
export class InfoModule {}
