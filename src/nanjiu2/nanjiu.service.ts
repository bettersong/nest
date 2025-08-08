import { Injectable } from '@nestjs/common';
import { CreateNanjiuDto } from './dto/create-nanjiu.dto';
import { UpdateNanjiuDto } from './dto/update-nanjiu.dto';
import axios from 'axios'
@Injectable()
export class NanjiuService {
  create(createNanjiuDto: CreateNanjiuDto) {
    return 'This action is nanjiu post';
  }
  getHello(): string {
    return 'Hello nanjiu---';
  }

  async sendMessage(query) {
    const res = await axios.get('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=3c704c3d-f14d-43bf-9ccd-ea5381257e2b',
    {
      data: {
        msgtype: 'text',
        text: {
          content: '资源加载异常',
        },
      }
    },)
    return res
  }

  findAll() {
    return `This action returns all nanjiu`;
  }

  findOne(id: number) {
    return `This action returns a #${id} nanjiu`;
  }

  update(id: number, updateNanjiuDto: UpdateNanjiuDto) {
    return `This action updates a #${id} nanjiu`;
  }

  remove(id: number) {
    return `This action removes a #${id} nanjiu`;
  }
}
