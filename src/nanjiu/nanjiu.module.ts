import { Module } from '@nestjs/common';
import { NanjiuService } from './nanjiu.service';
import { UserService } from 'src/user/user.service';
import { NanjiuController } from './nanjiu.controller';

@Module({ // 模块装饰器
  controllers: [NanjiuController], // 控制器
  providers: [{
    provide: 'NANJIU',  // 自定义依赖注入的标识
    useClass: NanjiuService // 依赖注入的类
  },
  UserService,
  {
    provide: 'USER', // 自定义依赖注入的标识
    useFactory: async () => { // 工厂模式
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(new UserService())
        }, 1000)
      })
      // return new UserService() // 依赖注入的类
    },
    inject: [UserService] // 依赖注入的类
  }

]
})
export class NanjiuModule {}
