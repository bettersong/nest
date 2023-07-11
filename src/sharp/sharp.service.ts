import { Injectable } from '@nestjs/common';
import { CreateSharpDto } from './dto/create-sharp.dto';
import { UpdateSharpDto } from './dto/update-sharp.dto';
import * as sharp from 'sharp'
@Injectable()
export class SharpService {
  async create(createSharpDto: CreateSharpDto) {
    if(!createSharpDto.code) return {code: 400, msg: '参数错误'}

    const buffer = Buffer.from(createSharpDto.code)
    const img = await sharp(buffer,{ limitInputPixels: 1000000000 }).png().toFile('./static/1.png')
    return {code: 200, img, url: `http://localhost:3000/static/1.png`} || {code: 400, msg: '生成失败'};
    
  }
}
