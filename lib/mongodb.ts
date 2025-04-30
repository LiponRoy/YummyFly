// lib/mongodb.ts
import mongoose, { ConnectOptions } from 'mongoose';

const MONGODB_URI: string = process.env.MONGODB_URI || '';

if (!MONGODB_URI) {
  throw new Error(' MONGODB_URI is not defined in environment variables');
}

// Track connection state
let isConnected: boolean = false;

export const connectToDatabase = async (): Promise<void> => {
  if (isConnected) return;

  try {
    const options: ConnectOptions = {
      dbName: 'bd-foody-zone',
    };

    await mongoose.connect(MONGODB_URI, options);
    isConnected = true;

    console.log(' MongoDB connected');
  } catch (error) {
    console.error(' MongoDB connection error:', (error as Error).message);
    throw error;
  }
};
