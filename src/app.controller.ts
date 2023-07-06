import { Controller, Get,Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello')
  get(): string {
    return this.appService.getHello();
  }

  @Get('/hello2')
  get2(): string {
    return this.appService.getHello2();
  }

}
