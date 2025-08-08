import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import axios from 'axios';
@Injectable()
export class UserService {
  constructor(
    // 使用 @InjectRepository(User) 注入实数据库实体
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}
  // 
 async add(createUserDto: CreateUserDto) {
    // 添加用户，更多操作参考 TypeORM 文档
    const res = await this.userRepository.save(createUserDto);
    return res
  }

  getHello(): string {
    return 'Hello user---';
  }
  // 获取用户信息
  getUserInfo(query, cookie) {
    console.log('---', cookie)
    // 优先取参数中的userId，没有则取cookie中的uid
    const userId = query.userId || cookie.uid
    // 返回base64加密后的token
    return {
      code: 200,
      data: {
        userId,
        // base64加密
        token: Buffer.from(userId).toString('base64')
      }
    }
  }

  updateUserInfo(body) {
    // const userId = Buffer.from(body.token, 'base64').toString()
    console.log('---token', decodeURIComponent(body.token))

    // console.log('base64解密:', userId)
    // console.log('zm+3DQ/gYeMzQ/HM2L76CA==', Buffer.from('dXNkanNsbHNsc2xk', 'base64').toString('utf-8'))
    return {
      code: 200,
      userId: decodeURIComponent(body.token) // 返回解密后的userId
    }
  }

  async sendMessage(query) {

    // const res = await axios.get('https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key=3c704c3d-f14d-43bf-9ccd-ea5381257e2b', {
    //   params: JSON.stringify({
    //     msgtype: 'text',
    //     text: {
    //       content: '资源加载异常',
    //     },
    //   }),
    
    // })
    console.log('---', axios)
    // 发送请求
    const res = await axios.get('https://jtest.if.qidian.com/argus/api/v1/qyn/indexPage?tab=0&subTab=&pageNo=')
    return res
  }
}
