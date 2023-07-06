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
  findAll() {
    return this.nanjiuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nanjiuService.findOne(+id);
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
