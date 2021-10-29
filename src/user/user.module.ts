import { Module } from '@nestjs/common';
import { DynamicModule } from '../dynamic/dynamic.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';
//mongodb+srv://keval:B1gTHgylOu1r0BAm@clusterx.uzfp2.mongodb.net/make-dynamic?retryWrites=true&w=majority

@Module({
  imports: [DynamicModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
