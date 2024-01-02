import mongoose from 'mongoose';

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set('strictQuery', true);

  if (!process.env.MONGODB_URL) {
    throw new Error('Missing MONGO_URL!!!');
  }

  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: 'ai-overflow-jsm' ,
    });

    isConnected = true;
    console.log('=> using new database connection');
  } catch (error) {
    console.log('=> error while connecting with database:', error);
    
  }
};