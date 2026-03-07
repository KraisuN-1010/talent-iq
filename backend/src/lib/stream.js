import { StreamChat } from 'stream-chat';

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error('Stream API key and secret must be set in environment variables');
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret);

export const upssertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log('User upserted to Stream successfully:', userData);
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

//todo: add anotehr method to generateTOken