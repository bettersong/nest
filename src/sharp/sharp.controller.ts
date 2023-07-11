import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SharpService } from './sharp.service';
import { CreateSharpDto } from './dto/create-sharp.dto';
// import { UpdateSharpDto } from './dto/update-sharp.dto';

@Controller('sharp')
export class SharpController {
  constructor(private readonly sharpService: SharpService) {}

  @Post('/generateImg')
  create(@Body() createSharpDto: CreateSharpDto) {
    // console.log('sharp11', createSharpDto)
    return this.sharpService.create(createSharpDto);
  }
}
