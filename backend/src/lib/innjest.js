import inngest, { Inngest } from "inngest"
import { connectDB } from "./db"
import User from "../models/User"

export const inngest = new Inngest({ id : "talent-iq" });

const syncUser = inngest.createFunction(
  { id : "sync/user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    try {
      await connectDB()
      const { first_name, last_name, email_addresses, primary_email_address_id, profile_image_url, id: clerkId } = event.data
      const name = `${first_name} ${last_name}`
      const email = email_addresses.find(addr => addr.id === primary_email_address_id)?.email_address
      const profileImage = profile_image_url
      const user = new User({ name, email, profileImage, clerkId })
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