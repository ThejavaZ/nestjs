import { Controller, Get, Req, Res } from '@nestjs/common';
import type { Request, Response } from 'express';

@Controller({})
export class HelloController {
  @Get('/')
  index(@Req() req: Request, @Res() res: Response) {
    console.log(req.url);
    return res.status(200).json({
      message: 'Hello world!',
      protocol: req.protocol,
    });
  }
}
