import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { DynamicService } from './dynamic/dynamic.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dynamic: DynamicService,
  ) {}

  @Get()
  getHello(): string {
    const model = this.dynamic.createModelForName('keval.contacts');
    console.log(model);

    return this.appService.getHello();
  }
}
