import { Global, Module } from '@nestjs/common';
import { NanjiuService } from './nanjiu.service';
// import { UserService } from 'src/user/user.service';
import { NanjiuController } from './nanjiu.controller';

@Module({ // 模块装饰器
  controllers: [NanjiuController], // 控制器
  providers: [NanjiuService],
  exports: [NanjiuService]
})
export class NanjiuModule {

}
