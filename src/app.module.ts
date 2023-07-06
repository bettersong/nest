import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NanjiuModule } from './nanjiu/nanjiu.module';

@Module({
  imports: [NanjiuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
