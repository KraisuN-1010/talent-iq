import mongoose from 'mongoose';
import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first'); // Helps with local resolution
dns.setServers(['8.8.8.8', '8.8.4.4']); // Force Google DNS
import { ENV } from './env.js';

const connectDB = async () => {
  try {
    await mongoose.connect(ENV.MONGO_URI);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

export default connectDB;