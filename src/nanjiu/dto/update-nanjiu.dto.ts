import { PartialType } from '@nestjs/mapped-types';
import { CreateNanjiuDto } from './create-nanjiu.dto';

export class UpdateNanjiuDto extends PartialType(CreateNanjiuDto) {}
