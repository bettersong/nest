import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NanjiuModule } from './nanjiu/nanjiu.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [NanjiuModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
