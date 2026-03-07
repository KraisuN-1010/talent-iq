import { Inngest } from "inngest"
import connectDB from "./db.js"
import User from "../models/User.js"
import { upssertStreamUser, deleteUser } from "./stream.js";

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
      
      // Save user to MongoDB
      await user.save()
      
      //Add User to Stream as well
      await upssertStreamUser({ id: clerkId, name, email, image: profileImage })  

      
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
      
      // Delete user from MongoDB
      await User.deleteOne({ clerkId })
      // Delete user from Stream as well
      await deleteUser(clerkId.toString());
      console.log("User deleted successfully")
    } catch (error) {
      console.error("Error deleting user:", error)
    }
  }
);

export const functions = [syncUser, deleteUser]