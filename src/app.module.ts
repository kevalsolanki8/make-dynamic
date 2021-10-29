import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DynamicModule } from './dynamic/dynamic.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
//mongodb+srv://keval:B1gTHgylOu1r0BAm@clusterx.uzfp2.mongodb.net/make-dynamic?retryWrites=true&w=majority

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://keval:B1gTHgylOu1r0BAm@clusterx.uzfp2.mongodb.net/make-dynamic?retryWrites=true&w=majority',
      {
        useFindAndModify: false,
      },
    ),
    DynamicModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
