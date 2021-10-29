import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { DynamicService } from '../dynamic/dynamic.service';
import { v4 } from 'uuid';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly dynamicService: DynamicService,
  ) {}

  @Post()
  async makeUser(@Body() body: any) {
    for (let i = 0; i < 1000; i++) {
      const id = v4();
      console.log(id);
      const Model = this.dynamicService.createModelForName(v4());
      const data: any = new Model(body);

      console.log(data);

      try {
        const d = await data.save();
        console.log(d);
      } catch (e) {
        console.log(e);
        return 'error';
      }
    }

    return 'ok';
  }

  @Get()
  getUser() {
    try {
      const Model = this.dynamicService.createModelForName('harshal.credits');
      return Model.findOne({ name: 'Keval' });
    } catch (e) {
      return 'error';
    }
  }
}
