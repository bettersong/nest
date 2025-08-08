import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';
import { urlencoded, json } from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as url from 'url'
import { LoggerMiddleware } from './middleware/Logger.middleware';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

// 白名单
const whiteList = ['nanjiu.com', 'fenanjiu.com']
 // 图片防盗中间件
function imgMiddleware(req, res, next) {
  // console.log('--req', req.headers)
  
  // 获取资源类型
  const type = req.headers.accept || ''
  if(!type.includes('image')) {
    // 不是图片资源，直接放行
    next()
    return
  }

  const referer = req.headers.referer || ''
  // 获取referer的域名
  const { hostname } = url.parse(referer, true)
  if(referer && whiteList.includes(hostname) || !referer) {
    // 访问域名在白名单内，放行 !referer表示直接访问图片(比如浏览器地址栏输入图片地址)
    res.status(200)
    next() 
  }else {
    // 访问域名不在白名单内，返回403
    res.status(403)
    res.send('逮到你了，又来偷我图片是吧！')
  }
  
}


// vercel
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.setGlobalPrefix('/api'); // 全局路由前缀
  // app.use(cors()); // 允许跨域
  app.use(cookieParser()) // cookie中间件
  // 允许携带cookie
  app.use(cors({
    origin: true,
    credentials: true
  }))
  // app.use((req, res, next) => {
  //   res.header('Access-Control-Allow-Origin', '*');
  //   next()
  // })
  app.use(json({ limit: '10mb' })); // 允许上传大文件
  app.use(urlencoded({ extended: true, limit: '10mb' })); // 允许上传大文件
  app.use(imgMiddleware) // 图片防盗中间件
  app.use(LoggerMiddleware) // 日志中间件
  app.useGlobalPipes(new ValidationPipe()) // 全局验证管道
  // app.useStaticAssets(join(__dirname, '../static'), {
  //   prefix: '/static',
  // }); // 静态资源
  
  await app.listen(3000);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
