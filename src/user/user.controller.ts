import { Controller, Get, Post, Body, Req, Patch,Request, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InfoService } from 'src/info/info.service';
import { query } from 'express';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService
    ) {}

  @Post('addUser')
  create(@Body() createUserDto: CreateUserDto) {
    // 添加用户
    return this.userService.add(createUserDto);
  }

  @Get('getUserInfo') 
  getUserInfo(@Req() req) {
    const query = req.query
    const cookie = req.cookies
    // console.log('cookie', cookie)
    // 优先取参数中的userId，没有则取cookie中的uid
    const userId = query.userId || cookie.uid

    console.log('----userId', userId)
    
    // base64加密
    const token = Buffer.from(userId).toString('base64')
    console.log('加密后的token', token)
    // 返回base64加密后的token
    return {
      code: 0,
      data: {
        userId,
        // base64加密
        token,
        status: 2
      }
    }
  }

  @Post('updateUserInfo')
  updateUserInfo(@Request() req){
    console.log('updateUserInfo', req.body)
    return this.userService.updateUserInfo(req.body)
  }

  @Get('sendMessage')
  sendMessage(@Request() req) {
    return this.userService.sendMessage(req.query);
  }

  
}
