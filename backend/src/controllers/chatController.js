import { chatClient } from "../lib/stream.js"

export async function getStreamToken(req, res) {
  try {
    const token = chatClient.createToken(req.user.clerkId);
    res.status(200).json({
      token, 
      userId: req.user.clerkId, 
      name: req.user.name,
      email: req.user.email,
      profileImage: req.user.profileImage
    })
  } catch (error) {
    console.error("Failed to create Stream token:", error);
    res.status(500).json({ message: "Failed to create Stream token" })
  }
}
