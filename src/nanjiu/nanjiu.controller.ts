import { Controller, Get, Post, Body, Request, Patch, Param, Delete,Header, Query, HttpCode, Inject } from '@nestjs/common';
import { NanjiuService } from './nanjiu.service';
import { UserService } from 'src/user/user.service';
import { CreateNanjiuDto } from './dto/create-nanjiu.dto';
import { UpdateNanjiuDto } from './dto/update-nanjiu.dto';

@Controller('nanjiu')
export class NanjiuController {
  constructor(
    @Inject('NANJIU') private readonly nanjiuService: NanjiuService,
    @Inject('USER') private readonly userService: UserService,
    ) {}

  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() createNanjiuDto: CreateNanjiuDto) {
    console.log('工厂模式', this.userService.findAll())
    // return true
    return this.userService.findAll();
  }

  @Get()
  @HttpCode(202)
  findAll(@Request() req, @Query() query) {
    console.log('find', req, query)
    return this.nanjiuService.findAll();
  }

  @Get(':id')
  findOne(@Param() params) {
    console.log('params', params)
    return this.nanjiuService.findOne(+params.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNanjiuDto: UpdateNanjiuDto) {
    return this.nanjiuService.update(+id, updateNanjiuDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nanjiuService.remove(+id);
  }
}
