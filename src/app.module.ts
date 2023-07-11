import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NanjiuModule } from './nanjiu/nanjiu.module';
import { UserModule } from './user/user.module';
import { InfoModule } from './info/info.module';
import { SharpModule } from './sharp/sharp.module';

@Module({
  imports: [NanjiuModule, UserModule, InfoModule, SharpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
