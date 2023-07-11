import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { InfoModule } from 'src/info/info.module';

@Module({
  imports: [InfoModule], // 导入 InfoModule
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
