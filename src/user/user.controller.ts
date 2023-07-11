import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InfoService } from 'src/info/info.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly infoService: InfoService, // 注入 InfoService
    ) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.infoService.findAll() // 调用 InfoService 的 findAll 方法

    // return this.userService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
