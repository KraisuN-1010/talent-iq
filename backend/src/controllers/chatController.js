import { chatClient } from "../lib/stream.js"

export async function getStreamToken(req, res) {
  try {
    //Use clerkId for authentication because it should match the id in stream 
    const token = chatClient.createToken(req.user.clerkId);
    res.status(200).json({
      token, 
      userId: req.user.clerkId, 
      name: req.user.name,
      email: req.user.email,
      profileImage: req.user.profileImage
    })
  } catch (error) {
    res.status(500).json({ message: "Failed to create Stream token", error: error.message })
  }
}
