import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class DynamicService {
  getHello(): string {
    return 'Hello World!';
  }

  createModelForName(name) {
    // if (!(name in establishedModels)) {
    var Any = new mongoose.Schema({ any: mongoose.Schema.Types.Mixed });
    return mongoose.model(name, Any);
    // }
  }
}
