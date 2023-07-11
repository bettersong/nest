import { Injectable } from '@nestjs/common';
import { CreateSharpDto } from './dto/create-sharp.dto';
import { UpdateSharpDto } from './dto/update-sharp.dto';
import * as sharp from 'sharp'
@Injectable()
export class SharpService {
  create(createSharpDto: CreateSharpDto) {
    if(!createSharpDto.code) return {code: 400, msg: '参数错误'}
    const buffer = Buffer.from(createSharpDto.code)
    const img = sharp(buffer).png().toFile('src/sharp/1.png')
    console.log('img', img)
    return {code: 200, img} || {code: 400, msg: '生成失败'};
  }
}
