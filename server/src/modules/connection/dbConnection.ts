import mongoose from 'mongoose';

const dbConnect = () => {
  try {
    mongoose
      .connect(
        'mongodb+srv://admin:admin@cartplaces.mlmzwsk.mongodb.net/test?retryWrites=true',
      )
      .then(() => {
        console.log('database connect');
      });
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
