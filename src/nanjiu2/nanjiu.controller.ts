import { Controller, Get, Post, Body, Request, Patch, Param, Delete,Header, Query, HttpCode, Inject } from '@nestjs/common';
import { NanjiuService } from './nanjiu.service';

@Controller('nanjiu')
export class NanjiuController {
  constructor(
    @Inject('NANJIU') private readonly nanjiuService: NanjiuService,
    ) {}



  @Get('/sendMessage')
  sendMessage(@Request() req) {
    return this.nanjiuService.sendMessage(req.query);
  }
}
