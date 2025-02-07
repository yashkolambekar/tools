import { Controller, Get, Req, Request, Res, Response } from '@intentjs/core';
import { UserService } from 'app/services';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getHello(@Req() req: Request, @Res() res: Response) {
    return res.json({ hello: 'world' });
    req.path;
    return { hello: 'world' };
  }
}
