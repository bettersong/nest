import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class SharpMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('sharp middleware', req)
    next();
  }
}
