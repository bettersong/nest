import { Injectable } from '@nestjs/common';
import { CreateNanjiuDto } from './dto/create-nanjiu.dto';
import { UpdateNanjiuDto } from './dto/update-nanjiu.dto';

@Injectable()
export class NanjiuService {
  create(createNanjiuDto: CreateNanjiuDto) {
    return 'This action is nanjiu post';
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
