import * as mongoose from 'mongoose';

export const mongodbProviders = [
  {
    provide: 'MONGODB_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      //   mongoose.connect('mongodb://localhost/nest'),
      mongoose.connect(
        'mongodb+srv://keval:B1gTHgylOu1r0BAm@clusterx.uzfp2.mongodb.net/make-dynamic?retryWrites=true&w=majority',
        {
          autoIndex: true,
        },
      ),
  },
];
