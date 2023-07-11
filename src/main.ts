import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { urlencoded, json } from 'express';
// vercel
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 全局路由前缀
  app.use(cors()); // 允许跨域
  app.use(json({ limit: '10mb' })); // 允许上传大文件
  app.use(urlencoded({ extended: true, limit: '10mb' })); // 允许上传大文件
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
