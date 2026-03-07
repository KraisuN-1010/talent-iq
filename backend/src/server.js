import express from "express"
import path from "path"
import connectDB from "./lib/db.js"
import { ENV } from "./lib/env.js"

const app = express()
const __dirname = path.resolve()

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