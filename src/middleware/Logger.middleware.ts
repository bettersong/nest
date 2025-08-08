import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";

// @Injectable()
// export class LoggerMiddleware implements NestMiddleware {
//     use(req: Request, res: Response, next: () => void) {
//         console.log('logger middleware', `url: ${req.url}`);
//         next();
//     }
// }

export function LoggerMiddleware(req: Request, res: Response, next: () => void) {
    console.log('logger middleware', `url: ${req.url}`);
    next();
}