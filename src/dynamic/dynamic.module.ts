import { Module } from '@nestjs/common';
import { DynamicService } from './dynamic.service';

@Module({
  imports: [],
  controllers: [],
  providers: [DynamicService],
  exports: [DynamicService],
})
export class DynamicModule {}
