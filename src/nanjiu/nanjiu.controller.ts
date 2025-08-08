import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NanjiuService } from './nanjiu.service';
import { CreateNanjiuDto } from './dto/create-nanjiu.dto';
import { UpdateNanjiuDto } from './dto/update-nanjiu.dto';

@Controller('nanjiu')
export class NanjiuController {
  constructor(private readonly nanjiuService: NanjiuService) {}

  @Post()
  create(@Body() createNanjiuDto: CreateNanjiuDto) {
    return this.nanjiuService.create(createNanjiuDto);
  }

  @Get()
  getAll() {
    return 'This action returns all nanjiu';
  }

  @Get('/scanImage')
  scanImage() {
    return this.nanjiuService.scanImage();
  }
}
