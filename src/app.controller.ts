import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService, 
    //@Inject('config') private readonly configService // 注入 ConfigService
    ) {}

  @Get('/hello')
  get(): string {
    return this.appService.getHello();
  }

  @Get('/hello2')
  get2() {
    //return this.configService.getHello() // 调用 ConfigService 的 getHello 方法
  }
}
