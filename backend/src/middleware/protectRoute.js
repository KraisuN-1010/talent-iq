import { requireAuth } from "@clerk/express";
import User from "../models/User.js";

export const protectRoute = [
  requireAuth(), // Ensure the user is authenticated with Clerk
  async (req, res, next) => {
    try {
      const clerkId = req.auth.userId; // Get the authenticated user's Clerk ID
      const user = await User.findOne({ clerkId }); // Find the user in MongoDB using the Clerk ID
      if (!user) {
        return res.status(404).json({ message: "User not found" }); // If user is not found, return 404
      } else {
        req.user = user;    
        next(); // If user is found, attach user to request and proceed to the next middleware/route handler
      }
    } catch (error) {
      console.error("Error in protectRoute middleware:", error);
      res.status(500).json({ message: "Internal server error" }); // Handle any unexpected errors
    }   
  }
]