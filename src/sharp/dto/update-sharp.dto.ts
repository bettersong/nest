import { PartialType } from '@nestjs/mapped-types';
import { CreateSharpDto } from './create-sharp.dto';

export class UpdateSharpDto extends PartialType(CreateSharpDto) {}
