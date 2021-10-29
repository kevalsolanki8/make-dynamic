import { Injectable } from '@nestjs/common';
import * as mongoose from 'mongoose';

@Injectable()
export class DynamicService {
  getHello(): string {
    return 'Hello World!';
  }

  createModelForName(name) {
    // if (!(name in establishedModels)) {
    const Any = new mongoose.Schema({ name: String });

    return mongoose.model(name, Any);
    // }
  }
}
