import express from "express"
import path from "path"
import connectDB from "./lib/db.js"
import cors from "cors"
import { serve } from "inngest/express"
import { ENV } from "./lib/env.js"

const app = express()
const __dirname = path.resolve()

//middleware

app.use(express.json()) // Parse JSON request bodies

app.use(cors({ origin: ENV.CLIENT_URL, credentials: true })) // Enable CORS for all routes

app.use("/api/inngest", serve({ client: inngest, functions })); // Inngest endpoint for handling events

app.get("/health", (req, res) => {
  res.status(200).json({msg:"This is the health check endpoint"})
}) 

// Serve static files and handle SPA routing for all environments (not just production)
app.use(express.static(path.join(__dirname, "../frontend/dist")))
app.get("/{*any}", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
})

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => {
      console.log("Server running on", ENV.PORT)
    })
  } catch (error) {
    console.error("Failed to connect to the database:", error)
    process.exit(1) // Exit with failure code
  }
}

startServer() 