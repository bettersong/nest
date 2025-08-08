import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { InfoModule } from './info/info.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dbConfig } from './utils/dbConfig';
import { NanjiuModule } from './nanjiu/nanjiu.module';
@Module({
  imports: [
    NanjiuModule, UserModule, InfoModule,
    TypeOrmModule.forRoot(dbConfig() as any)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
