import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { DynamicService } from '../dynamic/dynamic.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly dynamicService: DynamicService,
  ) {}

  @Get()
  makeUser(@Body() body: any): string {
    return 'OK';
  }
}
