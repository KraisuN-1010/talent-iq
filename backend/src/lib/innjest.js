import { Inngest } from "inngest"
import connectDB from "./db.js"
import User from "../models/User.js"

export const inngest = new Inngest({ id : "talent-iq" });

const syncUser = inngest.createFunction(
  { id : "sync/user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    try {
      await connectDB()
      const { name, email, profileImageUrl, id: clerkId } = event.data
      const user = new User({ name, email, profileImage: profileImageUrl, clerkId })
      await user.save()
      console.log("User synced successfully:", user)
    } catch (error) {
      console.error("Error syncing user:", error)
    } 
  }
);

const deleteUser = inngest.createFunction(
  { id : "delete/user" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    try {
      await connectDB()
      const { id: clerkId } = event.data
      await User.deleteOne({ clerkId })
      console.log("User deleted successfully")
    } catch (error) {
      console.error("Error deleting user:", error)
    }
  }
);

export const functions = [syncUser, deleteUser]