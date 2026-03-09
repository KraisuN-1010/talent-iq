import { StreamChat } from 'stream-chat';
import { StreamClient } from '@stream-io/node-sdk';
const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error('Stream API key and secret must be set in environment variables');
}

export const streamClient = new StreamClient(apiKey, apiSecret); //For video calls
export const chatClient = StreamChat.getInstance(apiKey, apiSecret); //For chat functionality

export const upssertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    return userData;
  } catch (error) {
    console.error('Error upserting user to Stream:', error);
    throw error;
  } 
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);     
  } catch (error) {
    console.error('Error deleting user from Stream:', error);
    throw error;
  }
};
