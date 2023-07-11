import { Module, NestModule } from '@nestjs/common';
import { SharpService } from './sharp.service';
import { SharpController } from './sharp.controller';
import { SharpMiddleware } from './sharp.middleware';

@Module({
  controllers: [SharpController],
  providers: [SharpService]
})
export class SharpModule implements NestModule {
  configure(consumer) {
    consumer.apply(SharpMiddleware).forRoutes(SharpController)
  }
}
